/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  if (!tree) return []
  let queue = [tree]
  let res = []
  while (queue.length) {
    let size = queue.length
    let head = new ListNode()
    let p = head
    while (size--) {
      let cur = queue.shift()
      p.next = new ListNode(cur.val)
      p = p.next
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    if (head.next) {
      res.push(head.next)
    }
  }
  return res
}
