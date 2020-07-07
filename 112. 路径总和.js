/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false

  function dfs(node, result) {
    if (!node.left && !node.right) {
      // 叶子节点
      if (result + node.val === sum) {
        return true
      } else {
        return false
      }
    }
    let res = false
    if (node.left) {
      res = dfs(node.left, result + node.val)
    }
    if (res) {
      return true
    }
    if (node.right) {
      res = dfs(node.right, result + node.val)
    }
    return res
  }
  return dfs(root,0)
}
