/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    function con2(left,right){
        if(!left || !right){
            return
        }
        left.next = right
        con2(left.left,left.right)
        con2(right.left,right.right)
        con2(left.right,right.left)
    }
    if(!root) return root
    con2(root.left,root.right)
    return root
};