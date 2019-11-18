/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-17 19:53:40
 * @LastEditTime :2019-11-18 08:31:46
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 哈希法
  // if (s.length !== t.length) {return false;}
  // let map = new Map();
  // for (let i = 0;i < s.length;i++) {
  //   map.get(s[i]) === undefined ? map.set(s[i], 1) : map.set(s[i], map.get(s[i]) + 1);
  // }
  // for (let j = 0;j < t.length;j++) {
  //   if (map.get(t[j]) > 0) {map.set(t[j], (map.get(t[j])) - 1);} else {return false;}
  // }
  // return true;
  // 26个字符法
  if (s.length !== t.length) {return false;}
  let kmap = new Array(26).fill(0);
  for (let i = 0 ;i < s.length;i++) {
    kmap[s[i].charCodeAt(0) - 97]++;
    kmap[t[i].charCodeAt(0) - 97]--;
  }
  for (let i = 0;i < 26;i++) {
    if (kmap[i] !== 0) {return false;}
  }
  return true;
  // 解法三
  // if (s.length !== t.length) return false
  // let o = new Array(26).fill(0)
  // for (let i = 0; i < s.length; i++) {
  //   o[s[i].charCodeAt(0) - 97]++
  // }
  // let p = new Array(26).fill(0)
  // for (let i = 0; i < t.length; i++) {
  //   p[t[i].charCodeAt(0) - 97]++
  // }
  // o = o.toString()
  // p = p.toString()
  // return o === p
};
console.log(isAnagram('anagram', 'nagaram'));
