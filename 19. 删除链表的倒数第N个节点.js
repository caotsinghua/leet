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
var removeNthFromEnd = function(head, n) {
    let dummy={next:head}
    let sum=0;
    let p=dummy.next;
    while(p){
        p=p.next;
        sum++;
    }
    sum-=n;
    sum++;
    let pre=dummy;
    for(let i=0;i<sum-1;i++){
        pre=pre.next;
    }
    let cur=pre.next;
    let next=cur&&cur.next;
    pre.next=next;
    return dummy.next;

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy={next:head}
    let last=dummy.next;
    let cur=dummy.next;
    for(let i=0;i<n-1;i++){
        last=last.next;
    }
    let pre=dummy;
    while(last.next){
        pre=pre.next;
        cur=cur.next;
        last=last.next;
    }
    pre.next=cur.next;
    return dummy.next;
    

};