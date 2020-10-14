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
var minDepth = function(root) {
    if(!root) return 0
    let queue = [root]
    let res = 0
    while(queue.length){
        let size = queue.length
        res++
        while(size--){
            const cur = queue.shift()
            
            if(cur.left == null && cur.right == null){
                return res
            }
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
       
    }
    return res

};