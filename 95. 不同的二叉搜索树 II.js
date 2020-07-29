/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n===0){
        return []
    }
    function generate(start,end){
        let allTree=[]
        if(start > end){
            allTree.push(null)
            return allTree
        }
        for(let i=start;i<=end;i++){
            // 所有的左子树组合
            let left=generate(start,i-1)
            // 所有的右子树组合
            let right=generate(i+1,end)
            for(let j=0;j<left.length;j++){
                for(let k=0;k<right.length;k++){
                    let cur=new TreeNode(i)
                    cur.left=left[j]
                    cur.right=right[k]
                    allTree.push(cur)
                }
            }

        }
        return allTree

    }
    return generate(1,n)
};