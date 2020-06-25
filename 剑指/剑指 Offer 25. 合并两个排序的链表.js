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
    const Lres=new ListNode()
    let head=Lres;
    let node1=l1
    let node2=l2
    while(node1 && node2){
        if(node1.val <= node2.val){
            const next=node1.next
            head.next=node1
            node1.next=null
            head=head.next
            node1=next
        }else{
            const next=node2.next
            head.next=node2
            node2.next=null
            head=head.next
            node2=next
        }
    }
    head.next=node1 ? node1 : node2

    return Lres.next

};