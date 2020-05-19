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
var addTwoNumbers = function(l1, l2) {
    // 先反转，再相加
    function reverse(head){
        let pre=null;
        let cur=head;
        let c=0;
        while(cur){
            const next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next;
            c++;
        }
        return {
            head:pre,
            count:c
        };
    }
    const {head:l1H,count:l1Len}=reverse(l1)
    const {head:l2H,count:l2Len}=reverse(l2)

    const l1Head={next:l1H}
    const l2Head={next:l2H}
    let p1=l1Len>l2Len?l1Head.next:l2Head.next;
    let p2=l1Len>l2Len?l2Head.next:l1Head.next;
    let resHead=l1Len>l2Len?l1Head:l2Head;
    while(p1||p2){
        let a=p1?p1.val:0
        let b=p2?p2.val:0;
        const sum=a+b;
        if(sum>=10){
            // 进1
            let add=Math.floor(sum/10);
            let res=sum%10;
            p1.val=res;
            if(p1.next){
                p1.next.val+=add;
            }else{
                let node=new ListNode(add);
                p1.next=node;
            }
        }else{
            p1.val=sum;
        }
        if(p1){
            p1=p1.next;
        }
        if(p2){
            p2=p2.next;
        }
    }
    return reverse(resHead.next).head
};
