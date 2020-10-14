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
  // dfs => is balance
  function dfs(node) {
    if (!node) return 0
    const leftD = dfs(node.left)
    const rightD = dfs(node.right)
    if (leftD === false || rightD === false) {
      return false
    }
    if (Math.abs(Math.floor(leftD - rightD)) <= 1) {
      return Math.max(leftD, rightD) + 1
    } else {
      return false
    }
  }
  let r = dfs(root)
  return r !== false
}
