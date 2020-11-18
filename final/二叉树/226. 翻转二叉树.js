/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null
    let p =root.left
    root.left = root.right
    root.right = p
    invertTree(root.left)
    invertTree(root.right)
    return root
};