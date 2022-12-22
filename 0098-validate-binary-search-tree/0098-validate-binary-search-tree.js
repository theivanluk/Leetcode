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
  function dfs (node, lowerLimit = Number.NEGATIVE_INFINITY, upperLimit = Number.POSITIVE_INFINITY) {
    if (!node) { return true };
    if (node.val <= lowerLimit || node.val >= upperLimit) { return false }
    
    return true && dfs(node.left, lowerLimit, node.val) && dfs(node.right, node.val, upperLimit);
  }
  
  return dfs(root);
};