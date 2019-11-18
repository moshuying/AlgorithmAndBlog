# javascript 解决默认取整的坑(目前已知的最佳解决方案)

## 复现该问题
js在数字操作时总会取更高精度的结果,例如`1234/10`结果就是`123.4`,但是在c或者java中整数除以10的结果还是整数,小数部分被舍去,不仅如此 `*`,`%`等运算符也会出现这种结果,但我们有时候更希望舍去取整

## 使用Math标准库

Math标准库提供了`Math.floor()：向下取整Math.ceil()：向上取整Math.round()：四舍五入`这三种取整方法,效率也不错,但是在进行一些操作时,总感觉别扭,而且效率会偏低,查看了v8中Math部分的源码后发现需要进行非常多的操作后才能得到结果

```c++

//builtins-math-gen.cc文件中声明了math库的所有方法
// ES6 #sec-math.floor
TF_BUILTIN(MathFloor, MathBuiltinsAssembler) {
  TNode<Context> context = CAST(Parameter(Descriptor::kContext));
  TNode<Object> x = CAST(Parameter(Descriptor::kX));
  MathRoundingOperation(context, x, &CodeStubAssembler::Float64Floor);
}
// code-stub-assembler.cc文件中进行了floor操作
TNode<Float64T> CodeStubAssembler::Float64Floor(SloppyTNode<Float64T> x) {
  if (IsFloat64RoundDownSupported()) {
    return Float64RoundDown(x);
  }
  TNode<Float64T> one = Float64Constant(1.0);
  TNode<Float64T> zero = Float64Constant(0.0);
  TNode<Float64T> two_52 = Float64Constant(4503599627370496.0E0);
  TNode<Float64T> minus_two_52 = Float64Constant(-4503599627370496.0E0);
  VARIABLE(var_x, MachineRepresentation::kFloat64, x);
  Label return_x(this), return_minus_x(this);
  // Check if {x} is greater than zero.
  Label if_xgreaterthanzero(this), if_xnotgreaterthanzero(this);
  Branch(Float64GreaterThan(x, zero), &if_xgreaterthanzero,
         &if_xnotgreaterthanzero);
  BIND(&if_xgreaterthanzero);
  {
    // Just return {x} unless it's in the range ]0,2^52[.
    GotoIf(Float64GreaterThanOrEqual(x, two_52), &return_x);
    // Round positive {x} towards -Infinity.
    var_x.Bind(Float64Sub(Float64Add(two_52, x), two_52));
    GotoIfNot(Float64GreaterThan(var_x.value(), x), &return_x);
    var_x.Bind(Float64Sub(var_x.value(), one));
    Goto(&return_x);
  }
  BIND(&if_xnotgreaterthanzero);
  {
    // Just return {x} unless it's in the range ]-2^52,0[
    GotoIf(Float64LessThanOrEqual(x, minus_two_52), &return_x);
    GotoIfNot(Float64LessThan(x, zero), &return_x);
    // Round negated {x} towards -Infinity and return the result negated.
    TNode<Float64T> minus_x = Float64Neg(x);
    var_x.Bind(Float64Sub(Float64Add(two_52, minus_x), two_52));
    GotoIfNot(Float64LessThan(var_x.value(), minus_x), &return_minus_x);
    var_x.Bind(Float64Add(var_x.value(), one));
    Goto(&return_minus_x);
  }
  BIND(&return_minus_x);
  var_x.Bind(Float64Neg(var_x.value()));
  Goto(&return_x);
  BIND(&return_x);
  return TNode<Float64T>::UncheckedCast(var_x.value());
}
```
在进行Math.floor操作时会进行很多操作,复杂度较高,有很多层递归才能获得结果

## 使用按位运算符
按位运算符中的`~`是将数字按位取反,位运算是js中计算较快的操作符,把浮点数两次按位取反后可以获得舍去取整的结果即`Math.floor(5.6)==~~5.6)`这是目前已知的最快解决方法
