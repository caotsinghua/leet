/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 12345
// 2 4
var reverseBetween = function(head, m, n) {
    let tHead={next:head}
    let start=tHead.next;
    let pre=tHead;
    let end=tHead.next;
    let count=1;
    while(count<m){
        start=start.next;
        end=end.next;
        pre=pre.next;
        count++;
    }
    let preNode=null;
    let preEnd=tHead;
    let realStart=start;
    // 找到开始的节点
    for(let i=0;i<n-m+1;i++){
        preEnd=end;
        end=end.next;
        
        let tnext=start.next;
        start.next=preNode;
        preNode=start;
        start=tnext;
    }
    // console.log(preEnd,end,pre,start)
    pre.next=preEnd;
    realStart.next=end;
    
    return tHead.next;   
};