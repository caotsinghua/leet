/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const xs=[0,0,1,-1]
    const ys=[1,-1,0,0]
    const stack=[]
    let res=0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                res++
                stack.push({x:i,y:j})
                grid[i][j]=0;
                while(stack.length){
                    const cur=stack.pop()
                    const {x:prevX,y:prevY}=cur;
                    for(let i=0;i<4;i++){
                        let curX=prevX+xs[i]
                        let curY=prevY+ys[i]
                        if(curX<0||curX>=grid.length||curY<0||curY>=grid[curX].length||grid[curX][curY]==0){
                            continue
                        }
                        grid[curX][curY]=0
                        stack.push({
                            x:curX,
                            y:curY
                        })
                    }
                    // 深度遍历，直到这个岛屿遍历完毕
                }
            }
            
        }
    }
    return res
};