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
var isSymmetric = function(root) {
    if(!root) return true;
    const queue=[];
    queue.push(root);
    while(queue.length){
        let size=queue.length;
        let floor=[]
        while(size--){
            let tmp=queue.shift()
            floor.push(tmp?tmp.val:null)
            if(tmp){
                queue.push(tmp.left)
                queue.push(tmp.right)
            }
        }
        // console.log(floor)
        if(!check(floor)){
            return false
        }
    }
    return true;
};
function check(arr){
    for(let i=0,j=arr.length-1;i<j;i++,j--){
        if(arr[i]!==arr[j]){
            return false
        }
    }
    return true;
}

// ===== O n的方法 

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
var isSymmetric = function(root) {
    if(!root) return true;
    const queue=[root,root];

    while(queue.length){
        let size=Math.floor(queue.length/2);
        while(size--){
            let origin=queue.shift()
            let reverse=queue.shift()
            // console.log(origin?origin.val:null,reverse?reverse.val:null)
            if(origin && reverse){
                if(origin.val !== reverse.val){
                    return false
                }
                queue.push(origin.left)
                queue.push(reverse.right)
                queue.push(origin.right)
                queue.push(reverse.left)
            }else if(origin!==reverse){
                return false
            }
            // null
        }

    }
    return true;
};