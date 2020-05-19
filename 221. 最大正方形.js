/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix.length===0) return 0;
    let maxWidth=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==1){
                const width=getMax(i,j,1)
                // console.log(width)
                maxWidth=Math.max(maxWidth,width)
            }
        }
    }

    function getMax(i,j,width){
        let row=i;
        let col=j;
        if(i+width >=matrix.length || j+width >=matrix[i].length) return width

        for(;row<=i+width;row++){
            if(matrix[row][j+width]==0){
                return width;
            }
        }
        for(;col<=j+width;col++){
            if(matrix[i+width][col]==0){
                return width;
            }
        }
        return getMax(i,j,width+1);

    }

    return maxWidth*maxWidth

};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
   let dp=[]
   for(let i=0;i<matrix.length;i++){
       dp[i]=[];
       for(let j=0;j<matrix[i].length;j++){
           dp[i][j]=matrix[i][j];
       }
   }
   let maxWidth=0;
   for(let i=0;i<matrix.length;i++){
       for(let j=0;j<matrix[i].length;j++){
           if(matrix[i][j]==0) {
            dp[i][j]=0;

           }else{
            let top=i-1>=0?dp[i-1][j]:0
            let left=j-1>=0?dp[i][j-1]:0
            let leftTop=(i-1>=0&&j-1>=0)?dp[i-1][j-1]:0
            // console.log(left,top,leftTop)
            dp[i][j]=Math.min(left,top,leftTop)+1
            maxWidth=Math.max(maxWidth,dp[i][j])
           }


       }
   }
   return maxWidth*maxWidth


};
