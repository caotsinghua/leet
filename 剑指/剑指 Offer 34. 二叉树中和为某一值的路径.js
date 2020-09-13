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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const res = []
  function loop(node, path, left) {
    path = [...path, node.val]
    left = left - node.val
    if (left === 0 && !node.left && !node.right) {
      res.push(path)
      return
    }
    if (node.left) {
      loop(node.left, path, left)
    }
    if (node.right) {
      loop(node.right, path, left)
    }
  }
  if (!root) return []
  loop(root, [], sum)
  return res
}
