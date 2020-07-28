/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0
  function deep(node, num) {
    if (!node) return
    res = Math.max(res, num + 1)
    if (node.left) {
      deep(node.left, num + 1)
    }
    if (node.right) {
      deep(node.right, num + 1)
    }
  }
  deep(root, 0)
  return res
}
