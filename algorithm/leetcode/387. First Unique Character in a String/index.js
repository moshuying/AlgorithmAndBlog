/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-17 19:10:43
 * @LastEditTime :2019-11-17 19:48:12
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 解法二
  if (s === '' || s.length < 1) {return -1;}
  let set = new Set();
  for (let i = 0 ;i < s.length;i++) {
    // position,可选。从当前字符串的哪个索引位置开始搜寻子字符串，默认值为0。
    if (!s.includes(s[i], i + 1) && !set.has(s[i])) {
      return i;
    } else {
      set.add(s[i]);
    }
  }
  return -1;
  // 解法一
  // if (s === '' || s.length < 1) {return -1;}
  // let map = {};
  // for (let i = 0 ;i < s.length;i++) {
  //   map[s[i]] === undefined ? map[s[i]] = 0 : map[s[i]]++;
  // }
  // for (const key in map) {
  //   if (map[key] === 0) {
  //     return s.indexOf(key);
  //   }
  // }
  // return -1;
};

console.log(firstUniqChar('asdfagsdfasdf'));
