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
var rob = function (root) {
  const yes = new Map()
  const no = new Map()
  function dfs(node) {
    if(!node) return
    dfs(node.left)
    dfs(node.right)
    // 偷左，右
    let tou =
      Math.max(yes.get(node.left) || 0, no.get(node.left) || 0) +
      Math.max(yes.get(node.right) || 0, no.get(node.right) || 0)
    let butou = node.val + (no.get(node.left) || 0) + (no.get(node.right) || 0)
    yes.set(node, butou)
    no.set(node, tou)
  }
  dfs(root)
  return Math.max(yes.get(root), no.get(root)) || 0
}
