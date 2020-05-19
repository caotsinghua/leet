/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head) return head;
    let pHead={next:head}
    let source=[]
    let p=head;
    while(p){
        source.push(p)
        p=p.next
    }
    let start=0;
    let end=source.length-1;
    let pStart=source[start]
    let pEnd=source[end]
    while(start<=end){
        pStart=source[start]
        pEnd=source[end]
        pEnd.next=pStart.next;
        pStart.next=pEnd;
        start++;
        end--;
    }
    pEnd.next=null;
    return pHead.next;
};