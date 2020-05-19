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
var middleNode = function(head) {
    let len=0;
    let p=head;
    while(p){
        len++;
        p=p.next;
    }
    let mid=Math.floor(len/2)
    let t=0;
    let res=head;
    while(t<mid){
        t++;
        res=res.next;
    }
    return res;
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
var middleNode = function(head) {
    // 快慢指针
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next;
        fast=fast.next;
    }
    return slow
}