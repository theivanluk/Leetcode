/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
  console.log(root, 'root');
  
  let p_path = [];
  let q_path = [];
  let maxLength;
  
  function dfs (node, target, path) {
    console.log(node);
    if (!node) { return }
    
    path.push(node);
    
    if (node === target) {
      return;
    }
    
    if (node.val > target.val) {
      dfs(node.left, target, path);
    } else {
      dfs(node.right, target, path);
    }
  }
  
  dfs(root, p, p_path);
  dfs(root, q, q_path);
  
  maxLength = Math.min(p_path.length, q_path.length);
  
  p_path.length = maxLength;
  q_path.length = maxLength;
  
  for (let i = maxLength - 1; i > -1; i--) {
    if (p_path[i] === q_path[i]) { return p_path[i] }
  }
};