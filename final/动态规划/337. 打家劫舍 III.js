/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    function tou(node){
        if(!node) return [0,0]
        const left = tou(node.left)
        const right = tou(node.right)
        let got = left[0] + right[0] + node.val // tou
        let not = Math.max(...left) + Math.max(...right)
        return [not,got]
    }
    const [y,n] = tou(root)
    return Math.max(y,n)
};