/**
 * @Author :墨抒颖
 * @Date :2020-02-20 21:31:47
 * @LastEditTime :2020-02-20 22:04:53
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 * @Description :墨抒颖
 * @Use :链表操作库
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 *
 * @param {ListNode} L
 */
function show (L) {
  let p = L;
  let str = '';
  while (p.next !== null) {
    str += p.val + ' ';
    p = p.next;
  }
  str += p.val + ' ';
  console.log(str);
}

/**
 *
 * @param {Number} num
 */
function init (num) {
  let head = new ListNode();
  let res = head;
  while (num) {
    res.val = ~~(Math.random(1, 100) * 100);
    res.next = new ListNode();
    res = res.next;
    num--;
  }
  return head;
}

/**
 *
 * @param {Array} arr
 */
function initByArray (arr) {
  let head = new ListNode(arr[0]);
  let res = head;
  for (let i = 1;i < arr.length;i++) {
    res.next = new ListNode(arr[i]);
    res = res.next;
  }
  return head;
}
module.exports = {
  ListNode,
  show,
  init,
  initByArray,
};
