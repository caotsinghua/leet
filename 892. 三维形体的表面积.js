/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let topAndBottom=0;
    let side=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            let v=grid[i][j]
            if(v>0) topAndBottom+=2;
            if(i-1<0){
                side+=v;
            }else{
                side+=Math.max(v-grid[i-1][j],0)
            }
            if(i>=grid.length-1){
                side+=v;
            }else{
                side+=Math.max(v-grid[i+1][j],0)
            }
            if(j-1<0){
                side+=v;
            }else{
                side+=Math.max(v-grid[i][j-1],0)
            }
            if(j>=grid[i].length-1){
                side+=v;
            }else{
                side+=Math.max(v-grid[i][j+1],0)
            }

        }
    }
    return topAndBottom+side;
};