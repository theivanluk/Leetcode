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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) { return [] }

  const result = [];  
  const queue = [root];
  
  function bfs (queue) {
    if (queue.length === 0) { return }
    const level = [];
    const values = [];
    
    queue.forEach(node => {
      if (node) {
        level.push(node.left);
        level.push(node.right);
        values.push(node.val);
      }
    })
    
    values.length > 0 ? result.push(values) : null;
    
    bfs(level);
  }
  
  bfs(queue);
  
  return result;
};