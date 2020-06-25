/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result=[]
    const queue=[]
    if(!root) return result
    queue.push(root)
    while(queue.length){
        const size=queue.length
        const temp=[]
        for(let i=0;i<size;i++){
            const node=queue.shift()
            temp.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        result.push(temp)
    }
    return result
};