/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const xs=[0,0,1,-1,1,-1,-1,1]
    const ys=[1,-1,0,0,1,-1,1,-1] 
    let origin=[]
    for(let i=0;i<board.length;i++){
        origin[i]=[]
        for(let j=0;j<board[i].length;j++){
            origin[i][j]=board[i][j]
        }
    }

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
           let k=0;
           let aliveNum=0;
           while(k<8){
                //    遍历周围
               let findX=i+xs[k]
               let findY=j+ys[k]
               k++;
               if(findX<0||findX>=board.length||findY<0||findY>=board[i].length){
                   continue
               }
               if(origin[findX][findY]===1){
                   aliveNum++;
               }
               
           }
           //    少于两个/大于三个，死亡
           if(aliveNum<2||aliveNum>3){
               board[i][j]=0;
           }
           if(aliveNum===3){
               board[i][j]=1 // 仍然存活/复活
           }
        }
    }

};


// 添加复合状态
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const ALIVE_TO_DEATH=-1;
    const DEATH_TO_ALIVE=2;
    const xs=[0,0,1,-1,1,-1,-1,1]
    const ys=[1,-1,0,0,1,-1,1,-1] 
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            let k=0;
            let aliveNum=0;
            while(k<8){
                //    遍历周围
               let findX=i+xs[k]
               let findY=j+ys[k]
               k++;
               if(findX<0||findX>=board.length||findY<0||findY>=board[i].length){
                   continue
               }
            //    之前状态是存活
               if(board[findX][findY]===1 || board[findX][findY]===ALIVE_TO_DEATH){
                   aliveNum++;
               }
           }
            //    检查状态
            if(aliveNum>3||aliveNum<2){
                // 死亡
                if(board[i][j]===1){
                    // 复活到死亡
                    board[i][j]=ALIVE_TO_DEATH
                }
            }
            if(aliveNum===3){
                // 检查复活
                if(board[i][j]===0){
                    board[i][j]=DEATH_TO_ALIVE;
                }
            }
        }
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]===ALIVE_TO_DEATH){
                board[i][j]=0
            }else if(board[i][j]===DEATH_TO_ALIVE){
                board[i][j]=1
            }
        }
    }

};