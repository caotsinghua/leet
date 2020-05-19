/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const pPath=[]
    const qPath=[]
    getParentPath(root,p,pPath)
    getParentPath(root,q,qPath)
    for(let i=pPath.length-1;i>=0;i--){
        for(let j=qPath.length-1;j>=0;j--){
            if(pPath[i]===qPath[j]){
                return pPath[i]
            }
        }
    }
    return null
};

// 深度+回溯
function getParentPath(root,node,path){
    if(!root) return false;
    path.push(root)
    if(root===node) return true


   let has= getParentPath(root.left,node,path) || getParentPath(root.right,node,path)
   if(!has){
       path.pop()
   }
   return has;
}
