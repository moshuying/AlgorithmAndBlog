[TOC]
# 前端与算法 leetcode 8. 字符串转换整数 (atoi)
---

## 题目描述
请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

示例 1:
```
输入: "42"
输出: 42
```
示例 2:
```
输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```
示例 3:
```
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```
示例 4:
```
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
```
示例 5:
```
输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
```
[8. 字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi)

## 概要
手搓一个api
## 提示
循环
## 解析

### 解法一:正则

字符串去除空格然后正则匹配以-+开头数字结束的部分

### 解法二:api

直接parseint,判断一下即可

### 解法二:手搓一个api

这个办法通用性要高很多清除空格然后判断首位是否是数字,先实现js版本击败80%,随后在java上实现2ms,击败99%

## 算法
java解法
```java
class Solution {
    public int myAtoi(String str) {
      if(str.isEmpty()) return 0 ;
      char[] req = str.toCharArray();
      long res = 0;
      int i=0,s=1,n=str.length();
      while(i<n&&req[i]==' '){i++;}
      if(i<n && req[i]=='+'){i++;}
      else if(i<n&&req[i]=='-'){i++;s=-1;}
      while(i<n&&(req[i]>='0'&&req[i]<='9')){
        if(res!=(int)res){
          return (s==1)?Integer.MAX_VALUE:Integer.MIN_VALUE;
        }
        res=res*10+req[i++]-'0';
      }
      if(res!=(int)res){
        return (s==1)?Integer.MAX_VALUE:Integer.MIN_VALUE;
      }
      return (int)(res*s);
    }
}
```
js解法
```js
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const result = str.trim().match(/^(-|\+)?\d+/g);
  return result? Math.max(Math.min(Number(result[0]), 2 ** 31 - 1), -(2 ** 31)): 0;
  // 一行代码解决问题
  // return parseInt(str, 10) < -(2 ** 31) ? -(2 ** 31) : (parseInt(str, 10) > (2 ** 31) - 1 ? (2 ** 31) - 1 : ((parseInt(str, 10) >= -(2 ** 31) && parseInt(str, 10) <= (2 ** 31) - 1) ? parseInt(str, 10) : 0));
  // 正经点的api侠解答
  // let result = parseInt(str, 10);
  // let max = 2 ** 31;
  // if (Number.isNaN(result)) {
  //   return 0;
  // } else if (result < 0 - max) {
  //   return 0 - max;
  // } else if (result > max - 1) {
  //   return max - 1;
  // } else {
  //   return result;
  // }
// 不调api的解法
//   str = str.trim(); // 清除空格
//   let max = 2 ** 31;
//   // 如果不是数字
//   if (!(str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57)) {
//     if (str.charAt(0) === '+') {
//       let req = res(str, 1);
//       return req >= (max - 1) ? max - 1 : req;
//     }
//     if (str.charAt(0) === '-') {
//       let req = -(res(str, 1));
//       return req <= -max ? -max : req;
//     }
//   } else {
//     // 第一位就是数字的情况
//     let req = res(str, 0);
//     return req >= (max - 1) ? max - 1 : req;
//   }
//   return 0;
// };
// // 解析数字,第一个参数字符串,第二个起始位置
// const res = (s, num) => {
//   let r = 0;
//   for (let i = num; i < s.length; i++) {
//     // 只接受数字
//     if (s.charCodeAt(i) <= 57 && s.charCodeAt(i) >= 48) {
//       r = r * 10 + (s.charCodeAt(i) - 48);
//     } else {
//       break;
//     }
//   }
//   // 最大值和最小值之间有差距,在这里判断不如结束后判断
//   return r;
};
```

## 传入测试用例的运行结果

```sh
input:
output:
```

## 执行结果

```
执行用时 :80 ms, 在所有 javascript 提交中击败了94.84%的用户
内存消耗 :35.5 MB, 在所有 javascript 提交中击败了74.01%的用户
```

### GitHub仓库

[查看github仓库 觉的骚也可以给个星星](https://github.com/moshuying/AlgorithmAndBlog)

### 查看更多

[查看更多题解](http://sfau.lt/bPbzVVJ)