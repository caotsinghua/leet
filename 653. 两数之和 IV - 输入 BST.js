/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let arr=[]
    function loop(root){
        let stack=[]
        let p=root;
        while(stack.length>0||p){
            while(p){
            
                stack.push(p)
                p=p.left
            }
            
            let tp=stack.pop()
            arr.push(tp.val)
            p=tp.right;
        }
    }
    loop(root)
  
   
    
    // for(let i=0;i<arr.length;i++){
    //     let rest=k-arr[i];
    //     if(arr.slice(i+1).indexOf(rest)>-1) return true;
    // }
    // 使用双指针
    let start=0
    let end=arr.length-1
    while(start<end){
        // 1,2,3,4,8,9
        let sum=arr[start]+arr[end]
        if(sum===k) return true
        else if(sum<k){
            start++
        }else{
            end--
        }
    }
    return false
};