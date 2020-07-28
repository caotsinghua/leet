/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let up = 0
  let resultHead = {
    next: l1,
  }
  let pre=resultHead
  while (l1 && l2) {
    let t = up + l1.val + l2.val
    let cur = t % 10
    up = Math.floor(t / 10)
    l1.val = cur
    pre=l1
    l1 = l1.next
    l2 = l2.next
  }
  //
  while (l1) {
    let t = up + l1.val
    let cur = t % 10
    up = Math.floor(t / 10)
    l1.val = cur
    pre=l1
    l1 = l1.next
  }
  while (l2) {
    let t = up + l2.val
    let cur = t % 10
    up = Math.floor(t / 10)
    pre.next = new ListNode(cur)
    pre=pre.next
    l2 = l2.next
  }
  if(up){
      pre.next=new ListNode(up)
      pre=pre.next
  }
  pre.next=null
  return resultHead.next
}
