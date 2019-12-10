/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-10 16:39:39
 * @LastEditTime :2019-12-10 16:43:14
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
  if (n === 1) {
    return '1';
  } else {
    let prev = countAndSay(n - 1);
    let str = '';
    let index = 0;
    let ch = '#';
    for (let i = 0;i < prev.length;i++) {
      if (ch !== prev.charAt(i)) {
        let len = i = index;
        str += len;
        str += ch;
        index = i;
        ch = prev.charAt(i);
      }
    }
    let len = prev.length - index;
    str += len;
    str += ch;
    return str.substring(2).toString();
  }
};
