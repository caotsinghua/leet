/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let max=-1;
    let dx=[0,0,1,-1]
    let dy=[1,-1,0,0]
    const len=grid.length
    function bfs(x,y){
        const visited=getVisited()
        visited[x][y]=true
        let queue=[{i:x,j:y,step:0}]
        

        while(queue.length){
            const {i,j,step}=queue.shift();
            for(let k=0;k<4;k++){
                let curI=i+dx[k]
                let curJ=j+dy[k]
                // 只有ij符合规则时
                if(curI>=len||curI<0||curJ>=len||curJ<0){
                    continue;
                }
                
                if(!visited[curI][curJ]){
                    visited[curI][curJ]=true
                    // console.log(curI,curJ)
                    // 没有访问过
                    queue.push({
                        i:curI,
                        j:curJ,
                        step:step+1
                    })
                    if(grid[curI][curJ]===1){
                        // 找到了最近的岛
                        return step+1;
                    }
                }
            }
        }
        return -1; // 没有找到岛屿
    }
    function getVisited(){
        let originVisited=[]
        for(let i=0;i<len;i++){
            originVisited.push([])
        }
        return originVisited
    }
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(grid[i][j]===0){
        
                let dis=bfs(i,j);
                
   
                
                max=Math.max(max,dis)
            }
        }
    }
    return max
};