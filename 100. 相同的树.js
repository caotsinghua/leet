/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function dfs(node1, node2) {
    // console.log(node1, node2, node1.val, node2.val)
    if (node1 && !node2) return false
    if (!node1 && node2) return false
    if (node1 && node2 && node1.val !== node2.val) return false
    if(!node1 && !node2) return true
    let l = dfs(node1.left, node2.left)
    let r = dfs(node1.right, node2.right)
    return l && r
  }
  return dfs(p, q)
}
