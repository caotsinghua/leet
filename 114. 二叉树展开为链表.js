// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {void} Do not return anything, modify root in-place instead.
//  */
// var flatten = function (root) {
//   function flat(node) {
//     if (!node) return null
//     // 无左右节点
//     if (!node.left && !node.right) {
//       return null
//     }
//     // 没有右节点
//     if (!node.right) {
//       node.right = flatten(node.left)
//       node.left=null
//     } else {
//       // 没有左节点
//       if (!node.left) {
//         node.right = flatten(node.right)
//       } else {
//         // 有左节点
//         const parentLeft = findLeft(node.left)
//         parentLeft.right = node.right
//         node.right = flatten(node.left)
//         node.left=null
//       }
//     }

//   }

//   function findLeft(node) {
//     if (!node.left && !node.right) return node
//     if (node.right) {
//       return findLeft(node.right)
//     } else if (node.left) {
//       return findLeft(node.left)
//     }
//   }
//   return flat(root)
// }

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return
  // 先序遍历
  let stack = [root]
  let prev = null
  while (stack.length) {
    let cur = stack.pop()
    if (prev) {
      prev.left = null
      prev.right = cur
    }
    let { left, right } = cur
    if (right) {
      stack.push(right)
    }
    if (left) {
      stack.push(left)
    }
    prev = cur
  }
}

var flatten = function (root) {
  if (!root) return
  let cur = root
  // 先序遍历
  while (cur !== null) {
    if (cur.left) {
      let next = cur.left
      let nextRight = next
      while (nextRight && nextRight.right) {
        nextRight = nextRight.right
      }
      if (nextRight) {
        nextRight.right = cur.right
      }

      cur.left = null
      cur.right = next
    }
    cur = cur.right
  }
}
