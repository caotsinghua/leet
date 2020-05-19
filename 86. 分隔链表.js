/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let pHead={next:head};
    
    let smallListHead={next:null}
    let smallTail=smallListHead;
    let cur=pHead.next;
    let pre=pHead;
    while(cur){
        if(cur.val<x){
            // 删除该节点，放到smallList去
            // 1.删除
            let dNext=cur.next;
            pre.next=cur.next;
            // 添加
            cur.next=null;
            smallTail.next=cur;
            smallTail=cur;
            // cur指向下一个
            cur=dNext;
        }else{
            pre=pre.next;
            cur=cur.next;
        }
    }
    smallTail.next=pHead.next;
    return smallListHead.next;
};