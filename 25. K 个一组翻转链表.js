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
var reverseKGroup = function(head, k) {

    let pHead={next:head};
    let prev=pHead;
    let end=pHead;

    while(end.next){
        let count=0;
        while(count<k && end){
            end=end.next;
            count++;
        }
        if(!end) break;// 不足k个
        let start=prev.next;
        let next=end.next;


        let reversePre=null;
        let reverseCur=start;
        // 逆置k个
        while(reverseCur!==next){
            let next=reverseCur.next;
            reverseCur.next=reversePre;
            reversePre=reverseCur;
            reverseCur=next;
        }
        prev.next=end;
        start.next=next;
        prev=start;
        end=prev;
    }
    return pHead.next;
};

// ===round2
var reverseKGroup = function(head, k) {

    let pHead={next:head}
    let pre=pHead
    let end=pHead
    while(end.next){
        let c=0;
        while(c<k && end){
            c++;
            end=end.next;
        }
        if(!end){
            // 不足k个，不反转
            break
        }
        let next=end.next;
        let start=pre.next
        // 链表逆置
        end.next=null;
        let p=start;
        let tpre=null
        while(p){
            let tn=p.next;
            p.next=tpre
            tpre=p;
            p=tn

        }
        // tpre此时指向end
        pre.next=end
        start.next=next; //
        pre=start
        end=pre

    }
    return pHead.next
}
