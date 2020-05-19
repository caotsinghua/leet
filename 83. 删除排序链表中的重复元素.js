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
var deleteDuplicates = function(head) {
    let pHead={next:head};
    let p=pHead.next;
    let pre=pHead;
    while(p && p.next){
        if(p.val===p.next.val){
            let next=p.next;
            pre.next=p.next;
            p.next=null;
            p=next;
        }else{
            pre=pre.next;
            p=p.next;
        }
    }
    return pHead.next;
};