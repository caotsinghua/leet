/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 3
    // 0 0 - 0 2
    // 0 1 - 1 2
    // 0 2 - 2 2
    // 1 0 - 0 1
    // 1 1 - 1 1
    // 1 2 - 2 1
    // 2 0 - 0 0
    // 2 1 - 1 0
    // 2 2 - 2 0
   
    // 20 10 00
    // 21 11 01
    // 22 12 02
    const n=matrix.length;

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(matrix[n-1-j][i].toString().indexOf(' ')>-1){
                let origin=matrix[n-1-j][i].split(' ')[0]
                
                matrix[i][j]=matrix[i][j]+' '+origin;

            }else{
                matrix[i][j]=matrix[i][j]+' '+matrix[n-1-j][i]
            }
            
        }
    }
    // console.log(matrix)

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            matrix[i][j]=matrix[i][j].split(' ')[1]
            
        }
    }
    
};