/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-11 22:29:27
 * @LastEditTime :2019-12-11 22:44:36
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {return '';}
  let [defaultStr, tempStr, count] = ['', '', 0];
  do {
    tempStr = strs[0].charAt(count);
    if (strs.every((el) => el.charAt(count) === tempStr)) {
      defaultStr += tempStr;
      count++;
    } else {
      tempStr = '';
    }
  } while (tempStr);
  return defaultStr;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
