/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  let queue = [root]
  let res = []
  if(!root) return []
  while (queue.length) {
    let size = queue.length
    while (size--) {
      let cur = queue.shift()
      res.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return res
}
