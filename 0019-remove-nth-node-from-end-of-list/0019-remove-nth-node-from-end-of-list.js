/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(head.val);
  dummy.next = head;
  let current = dummy;
  let nth = dummy;
  let count = 1;
  
  while (count <= n + 1) {
    nth = nth.next;
    count++;
  }
  
  while (nth) {
    current = current.next;
    nth = nth.next;
  }
  
  current.next = current.next.next;
  
  return dummy.next;
};