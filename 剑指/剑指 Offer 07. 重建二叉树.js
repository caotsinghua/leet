/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const pre = preorder.slice()
  function build(start, end) {
    if (start > end) {
      return null
    }
    let rootVal = pre.shift()
    let node = new TreeNode(rootVal)
    const index = inorder.findIndex((d) => d === rootVal)
    node.left = build(start, index - 1)
    node.right = build(index + 1, end)
    return node
  }
  return build(0, inorder.length - 1)
}
