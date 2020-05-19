/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let sum=0;
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==='R'){
                // 往qian
                let k=j;
                while(k>=0){
                    if(board[i][k]==='p'){
                        sum++;
                        break;
                    }else if(board[i][k]==='B'){
                        break;
                    }
                    k--;
                }
                // 往hou
                k=j;
                while(k<=board[i].length-1){
                    if(board[i][k]==='p'){
                        sum++;
                        break;
                    }else if(board[i][k]==='B'){
                        break;
                    }
                    k++;
                }
                // 往下
                k=i;
                while(k<=board.length-1){
                    if(board[k][j]==='p'){
                        sum++;
                        break;
                    }else if(board[k][j]==='B'){
                        break;
                    }
                    k++;
                }
                // 网上
                k=i;
                while(k>=0){
                    if(board[k][j]==='p'){
                        sum++;
                        break;
                    }else if(board[k][j]==='B'){
                        break;
                    }
                    k--;
                }
                break;
            }
        }
    }
    return sum
};