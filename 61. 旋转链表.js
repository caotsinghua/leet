/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 只有一个/0个
    if(!head || !head.next) return head;
    let tHead={next:head};

    for(let i=0;i<k;i++){
        let p=tHead;
        while(p.next && p.next.next){
            p=p.next;
        }
        let cur=p.next; // 保证有一个
        if(cur){
            p.next=cur.next; // null
            cur.next=tHead.next;
            tHead.next=cur;
        }
    }
    return tHead.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 只有一个/0个
    if(!head || !head.next) return head;
    let tHead={next:head};

    // 链接成环
    let oldTail=tHead;
    let len=0;
    while(oldTail.next){
        len++;
        oldTail=oldTail.next;
    }
    oldTail.next=tHead.next;

    let headIndex=len-k%len;
    let newHead=tHead;
    for(let i=0;i<=headIndex;i++){
        oldTail=newHead;
        newHead=newHead.next;
    }
    oldTail.next=null;
    tHead.next=newHead;
    return tHead.next;
};