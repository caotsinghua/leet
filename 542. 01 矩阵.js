/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const result=[]
    const xs=[0,0,1,-1]
    const ys=[-1,1,0,0]

    for(let i=0;i<matrix.length;i++){
        result[i]=[];
        for(let j=0;j<matrix[i].length;j++){
            //对每个元素深度遍历
            result[i][j]=dfs({i,j})
        }
    }
    function dfs({i,j}){
        const visited={
            [i+'-'+j]:true
        }
        if(matrix[i][j]===0) return 0;
        const stack=[{i,j,res:0}];
        let result=0;

        while(stack.length){
            let {i:x,j:y,res}=stack.shift();
            for(let t=0;t<4;t++){
                let curX=x+xs[t]
                let curY=y+ys[t]
                const key=curX+'-'+curY;
                if(curX<0||curX>=matrix.length||curY<0||curY>=matrix[curX].length||visited[key]){
                    continue;
                    // 这个节点已经访问过
                }
                visited[key]=true;

                stack.push({i:curX,j:curY,res:res+1})
                if(i===8&&j===5){
                    console.log(curX,curY,matrix[curX][curY],res+1)
                }
                result=res+1;

                if(matrix[curX][curY]===0){

                    return result;
                }
            }
        }
        return result;
    }
    return result;
};
