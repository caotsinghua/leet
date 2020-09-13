/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  let reverse = false
  let res = []
  while (queue.length) {
    let size = queue.length
    let tmp = []
    while (size--) {
      let cur = queue.shift()
      tmp.push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    if (reverse) {
      tmp.reverse()
    }
    res.push(tmp)
    tmp = []
    reverse = !reverse
  }
  return res
}
