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
var isBalanced = function (root) {
  function check(node) {
    if (!node) return 0
    const leftDeep = check(node.left)
    const rightDeep = check(node.right)
    if (leftDeep === -1 || rightDeep === -1) {
      return -1
    }
    if (Math.abs(leftDeep - rightDeep) > 1) {
      return -1
    }
    return Math.max(leftDeep, rightDeep) + 1
  }
  const res = check(root)
  return res !== -1
}
