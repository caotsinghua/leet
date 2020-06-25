/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  // 中序遍历
  let arr = []
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
  }
  dfs(root)

  let index = arr.length - k
  return arr[index]
}
