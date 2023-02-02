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
    let min = null;
    
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (min !== null && curr.val <= min.val) return false
        min = curr;
        curr = curr.right;
    }

    
    return true;
};