/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-11 22:29:27
 * @LastEditTime :2019-12-11 22:48:17
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  if (strs.length === 0) {return '';}
  let first = strs[0];
  let end = strs[strs.length - 1];
  let exp = new RegExp(`^${first}`);
  // 对比第一个和最后一个，假如最后一个包含第一个，则返回第一个
  if (first === end || end.match(exp)) {return first;}

  // 假如不包含，则对比后得到最长的公共前缀
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== end[i]) {
      return first.slice(0, i);
    }
  }
  // if (strs.length === 0) {return '';}
  // let [defaultStr, tempStr, count] = ['', '', 0];
  // do {
  //   tempStr = strs[0].charAt(count);
  //   // 用ervery去判断每一个数字
  //   if (strs.every((el) => el.charAt(count) === tempStr)) {
  //     defaultStr += tempStr;
  //     count++;
  //   } else {
  //     // 空字符串为false
  //     tempStr = '';
  //   }
  // } while (tempStr);
  // return defaultStr;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
