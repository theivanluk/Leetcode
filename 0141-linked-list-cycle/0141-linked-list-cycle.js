/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false
    
    let single = head;
    let double = head;
    
    while (double.next !== null && double.next.next !== null) {
        single = single.next;
        double = double.next.next;
        if (single === double) {
            return true;
        }
    }
    
    return false;
};