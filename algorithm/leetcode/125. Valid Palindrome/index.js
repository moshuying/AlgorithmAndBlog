/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-19 22:44:17
 * @LastEditTime :2019-11-20 19:59:30
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 很js的解法
  // s = s.match(/\w/g);
  // if (s === null || s.length <= 1) {return true;}
  // return s.join('').toLowerCase() === s.reverse().join('')
  //   .toLowerCase();
  // 双指针法
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let [i, j] = [0, s.length - 1];
  while (i <= j) {
    if (s.charAt(i++) !== s.charAt(j--)) {return false;}
  }
  return true;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
