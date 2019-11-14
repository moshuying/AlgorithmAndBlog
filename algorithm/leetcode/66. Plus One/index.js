/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-10 09:00:06
 * @LastEditTime :2019-11-10 09:27:40
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] = digits[i] % 10
    if (digits[i] !== 0) return digits
  }
  digits = new Array(digits.length + 1)
  for (let i = 1; i < digits.length; i++) {
    digits[i] = 0
  }
  digits[0] = 1
  return digits
  // 解法2
  // for (let i = digits.length - 1; i >= 0; i--) {
  //   digits[i]++
  //   if (digits[i] >= 10) {
  //     digits[i] = digits[i] % 10
  //     if (i === 0) {
  //       digits.unshift(1)
  //       break
  //     }
  //   } else {
  //     break
  //   }
  // }
  // return digits
}
