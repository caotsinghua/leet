/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  let res = [];
  bianli(root, res);
  return res;
};
function bianli(root, res) {
  if (root) {
    bianli(root.left, res);
    res.push(root.val);
    bianli(root.right, res);
  }
}
