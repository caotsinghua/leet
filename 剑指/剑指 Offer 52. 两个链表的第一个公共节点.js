/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const aMap = new Map()
  while (headA) {
    aMap.set(headA, true)
    headA = headA.next
  }

  while (headB) {
    if (aMap.get(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 双指针

  let pa = headA
  let pb = headB
  // 最终都会在null相遇
  while (pa !== pb) {
    pa = pa ? pa.next : headB
    pb = pb ? pb.next : headA
  }
  return pa
}
