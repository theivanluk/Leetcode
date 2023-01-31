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
    if (!root) return [];
    const result = [];
    const stack = [root]
    
    while (stack.length > 0) {
        const currentNode = stack.pop();
        result.push(currentNode.val);
        for (const child of currentNode.children.reverse()) {
            stack.push(child);
        }
    }

    return result;
};