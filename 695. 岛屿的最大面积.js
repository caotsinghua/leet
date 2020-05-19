/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    function dfs(grid,curI,curJ){
        if(curI<0||curJ<0 || curI===grid.length||curJ===grid[curI].length||grid[curI][curJ]!==1){
            return 0
        }
        grid[curI][curJ]=0; // 遍历过的置为0，防止重复访问
        const iDiff=[0,0,1,-1]
        const jDiff=[1,-1,0,0]
        let res=1;
        for(let i=0;i<4;i++){
            res+=dfs(grid,curI+iDiff[i],curJ+jDiff[i])
        }
        return res;
    }
    let res=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            const tp=dfs(grid,i,j)
            if(tp>res){
                res=tp
            }
        }
    }
    return res
};


// 深度优先+栈
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    const iDiff=[0,0,1,-1]
    const jDiff=[1,-1,0,0]
    let res=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            let cur=0;
            const stack=[{i,j}];
            while(stack.length>0){
                const {i:gi,j:gj}=stack.pop()
                if(gi<0||gj<0||gi>=grid.length||gj>=grid[gi].length||grid[gi][gj]!==1){
                    continue
                }
                cur++;
                grid[gi][gj]=0;
                for(let i=0;i<4;i++){
                    stack.push(
                        {
                            i:gi+iDiff[i],
                            j:gj+jDiff[i]
                        }
                    )
                }
            }
            if(cur>res){
                res=cur;
            }
        }
    }
    return res;
}

// 广度优先
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res=0;
    const iDiff=[0,0,1,-1]
    const jDiff=[1,-1,0,0]
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            let queue=[{i,j}]
            let cur=0;
            while(queue.length>0){
                const {i:gi,j:gj}=queue.shift();
                if(gi<0||gj<0||gi>=grid.length||gj>=grid[gi].length||grid[gi][gj]===0){
                    continue
                }
                cur++;
                grid[gi][gj]=0
                for(let i=0;i<4;i++){
                    queue.push({
                        i:gi+iDiff[i],
                        j:gj+jDiff[i]
                    })
                }
            }
            res=cur>res?cur:res
        }
    }
    return res;
}