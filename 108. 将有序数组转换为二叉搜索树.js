/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function build(nums, left, right) {
    if (left > right) return null
    let mid = Math.floor((left + right) / 2)
    let val = nums[mid]
    let node = new TreeNode(val)
    node.left = build(nums, left, mid - 1)
    node.right = build(nums, mid + 1, right)
    return node
  }
  return build(nums, 0, nums.length - 1)
}
