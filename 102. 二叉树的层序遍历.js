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
    let res=[]
    let queue=[]
    if(root){
        queue.push(root)
    }

    while(queue.length){
        let size=queue.length;
        let floor=[]
        while(size--){
            const cur=queue.shift()
            floor.push(cur.val)
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
        res.push(floor)
    }
    return res;
};
