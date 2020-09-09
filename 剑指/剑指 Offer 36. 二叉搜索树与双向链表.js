/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  let stack = []
  let pHead = {
    left: null, // pre
    right: null, // next
  }
  let pre = pHead
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    let cur = stack.pop()
    // console.log(cur.val)
    pre.right = cur
    cur.left = pre
    pre = cur
    if (cur.right) {
      root = cur.right
    }
  }
  if (pre !== pHead) {
    pre.right = pHead.right
    pHead.right.left = pre
  }
  return pHead.right
}
