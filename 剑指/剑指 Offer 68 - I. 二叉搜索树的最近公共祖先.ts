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
function lowestCommonAncestor(root, p, q) {
  if (!root) return root
//   console.log(p < root.val, q < root.val)
  if (p.val < root.val && q.val < root.val) {
    // 都在左子树
    return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > root.val && q.val > root.val) {
    // 都在右子树
    return lowestCommonAncestor(root.right, p, q)
  }
  // 分布在左右子树/ 一个是根
  return root
}
