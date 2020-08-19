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
  function deep(node) {
    if (!node) return 0
    const leftDeep = deep(node.left)
    const rightDeep = deep(node.right)
    if (leftDeep === false || rightDeep === false) {
      return false
    }
    if (Math.abs(leftDeep - rightDeep) > 1) {
      return false
    }
    return Math.max(leftDeep, rightDeep) + 1
  }
  return deep(root) === false ? false : true
}
