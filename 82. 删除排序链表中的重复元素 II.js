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
    let pHead={next:head}

    let cur=pHead.next;
    let pre=pHead;
    while(cur &&cur.next){
        if(cur.val===cur.next.val){
            let val=cur.val;
            while(cur && cur.val===val){
                let tnext=cur.next;
                pre.next=cur.next;
                cur.next=null;
                cur=tnext;
            }
        }else{
            pre=pre.next;
            cur=cur.next;
        }
    }
    return pHead.next;
};