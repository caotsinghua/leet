/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!B) return false
  if (!A) return false

  function check(tree, tree2) {
    if (!tree2) return true
    if (!tree) return false
    if (tree.val === tree2.val) {
      let a = false
      let b = false
      a = check(tree.left, tree2.left)
      b = check(tree.right, tree2.right)
      return a && b
    } else {
      return false
    }
  }
  return check(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}
