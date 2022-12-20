/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let rNode = new ListNode();
    const returnNode = rNode;

    let node1 = list1;
    let node2 = list2;

    while (node1 || node2) {
        if (node1 && node2) {
            if (node1.val <= node2.val) {
                rNode.next = node1;
                node1 = node1.next;
            } else {
                rNode.next = node2
                node2 = node2.next;
            }

            rNode = rNode.next;
        } else {
            if (node1) {
                rNode.next = node1;
                node1 = node1.next;
                rNode = rNode.next;
            }

            if (node2) {
                rNode.next = node2;
                node2 = node2.next;
                rNode = rNode.next;
            }
        }

    }

    return returnNode.next;
};