/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-16 10:24:42
 * @LastEditTime :2019-11-16 11:53:26
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // 双指针
  if (s.length > 0) {
    let [i, j] = [0, s.length - 1];
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  }
  // 递归
  // const swap = (start, s) => {
  //   if (start > 0) {
  //     [s[start - 1], s[s.length - start]] = [s[s.length - start], s[start - 1]];
  //     swap(--start, s);
  //   }
  // };
  // swap(~~(s.length / 2), s);
};
let temp = ['h', 'e', 'l', 'l', 'o'];
reverseString(temp);
console.log(temp);
