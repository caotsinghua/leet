/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if(!root) return true
  return check(root.left,root.right)
  function check(node1, node2) {
    if (node1 === node2) return true
    if (node1 && node2) {
      return (
        node1.val === node2.val &&
        check(node1.left, node2.right) &&
        check(node1.right, node2.left)
      )
    } else {
      return false
    }
  }
}
