/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-11-16 12:02:51
 * @LastEditTime :2019-11-16 20:55:49
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + ~~(x % 10);
    x = ~~(x / 10);
  }
  return (ans >= (2 ** 31) || ans <= -(2 ** 31)) ? 0 : ans;
};
console.log(reverse(1534236469));
