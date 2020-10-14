/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const k = 2
  let pHead = {
    next: head,
  }
  let pre = pHead
  let start = head
  let end = start
  while (start) {
    let c = k
    end = start
    while (c > 1 && end) {
      end = end.next
      c--
    }
    // console.log(end)
    if (!end) {
      // break
      break
    }
    // 确定start,end
    let kNext = end.next
    pre.next = end
    // 逆置
    let np = null
    let cur = start
    end.next = null
    while (cur) {
      let t = cur.next
      cur.next = np
      np = cur
      cur = t
    }
    // console.log(np)
    // console.log(pHead.next)
    start.next = kNext
    pre = start
    start = kNext
  }
  return pHead.next
}
