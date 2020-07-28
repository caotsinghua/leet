/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pHead = {
    next: head,
  }
  let pre = pHead
  let t = head
  while (n > 0) {
    t = t.next
    n--
  }
//   console.log(t)
  while(t){
      t=t.next
      pre=head
      head=head.next
  }
  
//   console.log(head)
  pre.next = pre.next.next
  head.next=null
  return pHead.next
}
