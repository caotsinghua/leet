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
var detectCycle = function(head) {
    let map=new Map();
    let p=head;
    let result=-1;
    let index=0;
    while(p && !map.has(p)){
        map.set(p,index++)
        p=p.next;
    }

    if(!p){
        return null
    }else{
        result=map.get(p)
        return p
    }
};

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
var detectCycle = function(head) {
    // 不使用额外空间
    let slow=head;
    let fast=head;
    while(slow&&fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            break;
        }
    }
    if(!slow||!fast||!fast.next){
        return null
    }else{
        slow=head;
        while(slow!==fast){
            slow=slow.next;
            fast=fast.next;
        }
        return slow
    }
};
