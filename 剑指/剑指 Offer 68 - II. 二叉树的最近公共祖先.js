/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root:any, p:any, q:any) {
  function findNode(root:any, node1:any, node2:any) {
    if (root == null) return null
    if (root.val === node1.val || root.val === node2.val) return root
    let left = findNode(root.left, node1, node2)
    let right = findNode(root.right, node1, node2)
    if (left && !right) {
      return left
    }
    if (right && !left) {
      return right
    }
    if(!left && !right){
        return
    }
    return root
  }
  return findNode(root, p, q)
}
