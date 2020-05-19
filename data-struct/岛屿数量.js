/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length===0 || grid[0].length===0) return 0
    const xs=[0,0,1,-1]
    const ys=[1,-1,0,0]
    let queue=[]
 

    
    let count=0;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                count++;
                queue=[]
                queue.push({x:i,y:j})
                while(queue.length>0){
                    let cur=queue.shift()
                    let {x:prevX,y:prevY}=cur;
                    if(prevX<0||prevX>=grid.length||prevY<0||prevY>=grid[prevX].length||grid[prevX][prevY]==0){
                        continue
                    }
                    grid[prevX][prevY]=0
                    for(let i=0;i<4;i++){
                        let curX=prevX+xs[i]
                        let curY=prevY+ys[i]
                        queue.push({
                            x:curX,
                            y:curY
                        })
                    }
                }
            }
            
        }
    }
    return count
};