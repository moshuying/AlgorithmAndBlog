/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-10 16:39:39
 * @LastEditTime :2019-12-18 18:20:21
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let prev = '1';
  for (let i = 1;i < n;i++) {
    prev = prev.replace(/(\d)\1*/g, (item) => `${item.length}${item[0]}`);
  }
  return prev;
};
console.log(countAndSay(70));
