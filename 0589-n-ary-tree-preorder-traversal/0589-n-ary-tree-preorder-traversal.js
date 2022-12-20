/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    const result = [];

    function dfs (node) {
        if (!node) { return };

        result.push(node.val);

        node.children.forEach(child => dfs(child));
    }

    dfs(root);

    return result;
};