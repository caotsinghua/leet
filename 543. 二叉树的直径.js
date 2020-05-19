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
var diameterOfBinaryTree = function(root) {
    let result=0

    function deep(root){
        if(!root) return 0
        let lDeep=deep(root.left)
        let rDeep=deep(root.right)
        result=Math.max(result,lDeep+rDeep)
        return Math.max(lDeep,rDeep)+1 
    }
    deep(root)

    return result
};