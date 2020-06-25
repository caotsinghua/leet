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
var getKthFromEnd = function(head, k) {
    let fast=head
    let slow=head
    let n=1
    while(n<=k && fast){
        fast=fast.next
        n++
    }
    
    if(!fast){
        return slow
    }

    while(fast){
        fast=fast.next
        slow=slow.next
    }

    return slow

};