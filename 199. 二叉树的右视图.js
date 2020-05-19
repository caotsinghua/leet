/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // 层次遍历，每一层的最后一个节点
    const queue=[]
    let res=[]
    if(!root) return []
    queue.push(root);

    while(queue.length){
        let size=queue.length;
        for(let i=0;i<size;i++){
            let cur=queue.shift();
            if(i===size-1){
                res.push(cur.val);
            }
            if(cur.left){
                queue.push(cur.left);
            }
            if(cur.right){
                queue.push(cur.right);
            }
        }
    }
    return res;
};
