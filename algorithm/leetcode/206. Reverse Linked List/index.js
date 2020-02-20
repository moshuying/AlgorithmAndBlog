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
const cout = (node) => {
  let p = node;
  while (p.next.next !== null) {
    console.log(p.val);
    p = p.next;
  }
};
let head = new ListNode(1);
let p = head;
for (let i = 1;i < 9;i++) {
  p.next = new ListNode(i + 1);
  p = p.next;
  // p.next = p.next.next
  // testdata.val = i + 1;
  // testdata.next = new ListNode(i+1)
  // testdata = testdata.next;
}

cout(head);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let [p, re] = [head, null];
  while (p) {
    [re, re.next, p] = [p, re, p.next];
  }
  return re;
};
