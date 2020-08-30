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
var minDepth = function (root) {
  if (!root) return 0
  let res = Infinity
  function loop(node, deep = 1) {
    if (!node.left && !node.right) {
      res = Math.min(deep, res)
      return
    }
    if (node.left) {
      loop(node.left, deep + 1)
    }
    if (node.right) {
      loop(node.right, deep + 1)
    }
  }
  loop(root)
  return res
}
