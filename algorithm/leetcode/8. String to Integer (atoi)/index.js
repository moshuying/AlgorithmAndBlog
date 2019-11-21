/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-20 20:17:11
 * @LastEditTime :2019-11-20 21:15:26
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {string} str
 * @return {number}
 */
// eslint-disable-next-line complexity
var myAtoi = function (str) {
  str = str.trim();
  let res = 0;
  // 为+号或者为数字
  if (str.charAt(0) === '+' || (str.charCodeAt(0) >= 48 || str.charCodeAt(0) <= 57)) {
    for (let i = 0;i < str.length;i++) {
      if (str.charCodeAt(i) < 57 && str.charCodeAt(i) > 48) {
        res = (res * 10) + (str.charCodeAt(i) - 48);
      } else {
        break;
      }
    }
    return res > 2 ** 31 ? 2 * 31 : res;
  } else if (str.charAt(0) === '-') {
    res = -0;
    for (let i = 0;i < str.length;i++) {
      if (str.charCodeAt(i) < 57 && str.charCodeAt(i) > 48) {
        res = (res * 10) + -(str.charCodeAt(i) - 48);
      } else {
        break;
      }
    }
    return res < -(2 ** 31) ? 2 * 31 : res;
  } else {
    return 0;
  }
};
console.log(myAtoi('-aasdf'));
