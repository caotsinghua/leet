/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let res=false;
    function rootOrder(tree){
        if(!tree) return;
        if(tree.val===t.val){
            // judge
            let target=t;
            if(judge(tree,target)){
                res=true;
            }
        }
        rootOrder(tree.left)
        rootOrder(tree.right)
    }

    function judge(source,target){
        if(!source&&!target) return true
        if(source&&!target) return false
        if(!source && target) return false
        if(source.val!==target.val){
            return false;
        }
        return judge(source.left,target.left)&&judge(source.right,target.right)
    }

    rootOrder(s)
    return res;
};
