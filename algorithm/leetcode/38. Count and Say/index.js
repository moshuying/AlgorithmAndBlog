/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-10 16:39:39
 * @LastEditTime :2019-12-10 20:42:42
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
  for (let i = 0;i < n;i++) {
    let [next, num, count] = ['', prev[0], 1];
    for (let j = 0 ;j < prev.length;j++) {
      if (prev[j] === num) {
        count += 1;
      } else {
        next += count + num + '';
        num = prev[j];
        count = 1;
      }
      next += count + num + '';
      prev = next;
    }
  }
  return prev;
};
console.log(countAndSay(7));
