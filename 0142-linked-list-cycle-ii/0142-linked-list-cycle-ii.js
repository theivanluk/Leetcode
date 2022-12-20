/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) { return null };

    let current = head;
    let double = head;

    do {
        if (double.next === null || double.next.next === null) {
            return null
        }

        double = double.next.next;
        current = current.next;

    } while (double !== current)

    double = head;

    while (double !== current) {
        double = double.next;
        current = current.next;
    }

    return current;
};