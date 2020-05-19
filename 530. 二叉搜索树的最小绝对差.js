// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var getMinimumDifference = function(root) {
//     let min1=Infinity;
//     let min2=Infinity;
//     // 深度优先遍历,找两个最小的值
//     function deep(root){
//         if(!root) return;
//         deep(root.left)
//         deep(root.right)
//         if(root.val<min1||root.val<min2){
//             if(min1>min2){
//                 min1=root.val; // 替换较大的一个
//             }else{
//                 min2=root.val;
//             }
//         }
//     }
//     deep(root)
//     console.log(min1,min2)
//     return Math.abs(min1-min2)
// };

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
 * 二叉搜索树进行中序遍历即可
 */
var getMinimumDifference = function(root) {
    function run(root){
        let stack=[];
        let pre=-Infinity
        let cur=0
        let p=root
        let min=Infinity
        while(stack.length>0||p){
            while(p){
                stack.push(p)
                p=p.left;
            }
            let tmp=stack.pop()
            cur=tmp.val;
            p=tmp.right;
            if(Math.abs(cur-pre)<min){
                min=Math.abs(cur-pre)
            }
            pre=cur;
        }
        return min
    }
    return run(root)
};