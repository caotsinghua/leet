var rotateRight = function (head, k) {
  if (!head || k === 0) return head
  // 链接
  let pHead = { next: head }
  let len = 0
  while (head.next) {
    head = head.next
    len++
  }
  len++
  head.next = pHead.next
  //   已经成环
  //   head :len - k%len +1
  let headIndex = len - (k % len)
  //   console.log(headIndex)
  head = pHead.next
  let pre = pHead
  while (headIndex--) {
    pre = head
    head = head.next
  }
  //   把head断掉
  pre.next = null
  return head
}
