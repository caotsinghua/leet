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
var maxDepth = function(root) {
    let maxdeep=0

    function dfs(node,deep){
        if(!node) return
        maxdeep=Math.max(maxdeep,deep)
    
        dfs(node.left,deep+1)
        dfs(node.right,deep+1)
    }
    dfs(root,1)
    return maxdeep
};