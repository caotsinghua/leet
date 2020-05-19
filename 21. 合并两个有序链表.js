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
var mergeTwoLists = function(l1, l2) {
    let pHead1={next:l1}
    let pHead2={next:l2}
    let pNew={next:null}
    if(!l1){
        return l2
    }
    if(!l2) return l1;

    let p1=pHead1.next;
    let p2=pHead2.next;
    let p=pNew;
    while(p1&&p2){
        if(p1.val<=p2.val){
            p.next=p1;
            p1=p1.next;
        }else{
            p.next=p2;
            p2=p2.next;
        }
        p=p.next;
    }
    if(p1){
        p.next=p1;
    }else{
        p.next=p2;
    }
    return pNew.next;

};