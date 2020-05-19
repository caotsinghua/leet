/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let pre=-Infinity;
    let stack=[]
    let tree=root
    while(tree || stack.length>0){
        while(tree!=null){
            stack.push(tree)
            tree=tree.left
        }
        tree=stack.pop();

        if(tree.val<=pre){
            return false;
        }
        pre=tree.val;
        tree=tree&&tree.right;
    }
    return true;
};
