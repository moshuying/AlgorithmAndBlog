javascript正常的英文编码是utf-8的，mysql默认存的也是这种编码，而emoji表情是utf-16的，这就导致了db存储emoji会有问题，所以最好的方式是，把emoji先转成utf-8的这种实体编码，存到数据库里，要使用的时候，从db拿出来，再解码成utf-16的形式。

[原文章](https://thekevinscott.com/emojis-in-javascript/)

```js
{
	// 表情转码
    utf16toEntities(str) {
      const patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
      str = str.replace(patt, (char) => {
        let H;
        let L;
        let code;
        let s;

        if (char.length === 2) {
          H = char.charCodeAt(0); // 取出高位
          L = char.charCodeAt(1); // 取出低位
          code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
          s = `&#${code};`;
        } else {
          s = char;
        }

        return s;
      });

      return str;
    },
    // 表情解码
    entitiestoUtf16(strObj) {
      const patt = /&#\d+;/g;
      const arr = strObj.match(patt) || [];

      let H;
      let L;
      let code;

      for (let i = 0; i < arr.length; i += 1) {
        code = arr[i];
        code = code.replace('&#', '').replace(';', '');
        // 高位
        H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
        // 低位
        L = ((code - 0x10000) % 0x400) + 0xDC00;
        code = `&#${code};`;
        const s = String.fromCharCode(H, L);
        strObj = strObj.replace(code, s);
      }
      return strObj;
    }
}
```

使用示例

```js
const s = 'test emoji 👇👉👈🙌';            
const dbSaveStr = utf16toEntities(s);
// 结果是： 'test emoji &#128071;&#128073;&#128072;&#128588;' 这样子的实体编码字符串存到db就没问题了

// 要使用时，想数据库中拿到上面的存储记录
cosnt dbOutStr = 'test emoji &#128071;&#128073;&#128072;&#128588;' ;
// 然后将其中的emoji转码成表情使用           
const ret = entitiestoUtf16(dbOutStr )    
// 得到： 'test emoji 👇👉👈🙌';      
```

# 将emoji转成UTF-16

这是更通用的方式，因为上面那种只是在web端能显示，如果是要存到db，给c++获取数据再客户端app展示，就行不通了。必须转成unicode-16才行。

```js
// http://www.2ality.com/2013/09/javascript-unicode.html
function toUTF16(codePoint) {
  var TEN_BITS = parseInt('1111111111', 2);
  function u(codeUnit) {
    return '\\u'+codeUnit.toString(16).toUpperCase();
  }

  if (codePoint <= 0xFFFF) {
    return u(codePoint);
  }
  codePoint -= 0x10000;

  // Shift right to get to most significant 10 bits
  var leadSurrogate = 0xD800 + (codePoint >> 10);

  // Mask to get least significant 10 bits
  var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

  return u(leadSurrogate) + u(tailSurrogate);
}
```

使用示例

```js

// using codePointAt, it's easy to go from emoji
// to decimal and back.
// Emoji to decimal representation
"😀".codePointAt(0)
>128512

// Decimal to emoji
String.fromCodePoint(128512)
>"😀"

// going from emoji to hexadecimal is a little
// bit trickier. To convert from decimal to hexadecimal,
// we can use toUTF16.
// Decimal to hexadecimal
toUTF16(128512)
> "\uD83D\uDE00"

// Hexadecimal to emoji
"\uD83D\uDE00"
> "😀"
```

判断字符串是否为emoji字符

```js
const emojiReg = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/;
```