/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-12-19 20:18:18
 * @LastEditTime :2019-12-19 20:31:04
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Use :使用说明
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 官方题解似乎跑不通,不知道是我那做错了
  // let dummy = new ListNode(0);
  // dummy.next = head;
  // let first = dummy;
  // let second = dummy;
  // for (let i = 0;i < n ;i++) {
  //   first = first.next;
  // }
  // while (first !== null) {
  //   first = first.next;
  //   second = second.next;
  // }
  // second.next = second.next.next;
  // return dummy.next;
  const travel = (node) => {
    if (node.next === null) {return 1;}
    let nth = travel(node.next) + 1;
    if (nth === n + 1) {node.next = node.next.next;}
    return nth;
  };
  let nth = travel(head);
  if (nth === n) {head = head.next;}
  return head;
};
