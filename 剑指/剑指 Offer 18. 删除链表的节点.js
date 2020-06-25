/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let pHead={
        next:head
    }
    let pre=pHead
    let cur=head
    while(cur){
        if(cur.val === val){
            break
        }
        pre=cur
        cur=cur.next
    }
    if(cur){
        const next=cur.next
        pre.next=next
        cur.next=null
        delete cur
    }
    return pHead.next
};