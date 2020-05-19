/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    // 相当于从0开始 +，-的二叉树
    let res=0;
    const queue=[0]
    let depth=0;
    while(queue.length && depth<=nums.length){
        
        
        const size=queue.length;
        for(let i=0;i<size;i++){
            const cur= queue.shift()
            if(cur===S&&depth===nums.length){
                res++;
            }
            if(depth===nums.length){
                continue
            }
            queue.push(cur+nums[depth])
            queue.push(cur-nums[depth])
        }

        depth++;
        
    }
    
    // function dfs(node,deep){
    //     if(deep===nums.length && node===S) {
    //         res++;
    //     }
    //     if(deep===nums.length){
    //         return;
    //     }
        
    //     dfs(node+nums[deep],deep+1)
    //     dfs(node-nums[deep],deep+1)
    // }
    // dfs(0,0)
    return res

};