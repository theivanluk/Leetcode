/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, previousNode = null) {
    if (head === null) { return null }
    if (head.next === null) {
        head.next = previousNode;
        return head;
    } else {
        const next = head.next;
        head.next = previousNode;
        return reverseList(next, head);
    }
};