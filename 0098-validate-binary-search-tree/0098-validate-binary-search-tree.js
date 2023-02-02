/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // use in order traversal
    
    if (!root) return true;
    
    const stack = [];
    const inOrder = [];
    let curr = root;
    let min;
    
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        inOrder.push(curr.val);
        curr = curr.right;
    }
    
    for (let i = 1; i < inOrder.length; i++) {
        if (inOrder[i - 1] >= inOrder[i]) return false
    }
    
    return true;
};