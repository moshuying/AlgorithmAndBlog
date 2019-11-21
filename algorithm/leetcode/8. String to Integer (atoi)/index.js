/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-20 20:17:11
 * @LastEditTime :2019-11-21 21:46:55
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
var myAtoi = function (str) {
  // 一行代码解决问题
  return parseInt(str, 10) < -(2 ** 31) ? -(2 ** 31) : (parseInt(str, 10) > (2 ** 31) - 1 ? (2 ** 31) - 1 : ((parseInt(str, 10) >= -(2 ** 31) && parseInt(str, 10) <= (2 ** 31) - 1) ? parseInt(str, 10) : 0));
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
console.log(myAtoi('2147483648'));
