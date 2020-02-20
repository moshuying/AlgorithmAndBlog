/**
 * @Author :墨抒颖
 * @Date :2020-02-20 21:18:16
 * @LastEditTime :2020-02-20 22:11:25
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Description :墨抒颖
 * @Use :使用说明
 */
const { show, initByArray} = require('../utils/ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

let l1 = initByArray([1, 5, 6]);
let l2 = initByArray([1, 2, 3, 4, 5, 6]);
show(mergeTwoLists(l1, l2));
