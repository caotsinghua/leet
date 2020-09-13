/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = []
  if (!root) return JSON.stringify(res)
  let queue = [root]
  while (queue.length) {
    let size = queue.length
    while (size--) {
      let cur = queue.shift()
      res.push(cur ? cur.val : null)
      if (cur) {
        queue.push(cur.left)
        queue.push(cur.right)
      }
    }
  }

  return JSON.stringify(res)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = JSON.parse(data)
//   console.log(arr)
  if (arr.length === 0) return null
  let root = new TreeNode(arr[0])
  arr.shift()
  let queue = [root]
  while (queue.length) {
    let size = queue.length
    while (size--) {
      let node = queue.shift()
      let left = arr.shift()
      let right = arr.shift()
    //   console.log({ left, right, node })
      let nl = left== null ? null : new TreeNode(left)
      let nr = right == null ? null : new TreeNode(right)
      node.left = nl
      node.right = nr
    //   console.log(node.left)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
