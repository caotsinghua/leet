/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let xs=[0,0,1,-1]
    let ys=[1,-1,0,0]
    let res=0;
    let visited=[]
    for(let i=0;i<m;i++){
        visited.push([])
    }
    visited[0][0]=true;
    const stack=[{x:0,y:0}]
    while(stack.length){
        const {x,y}=stack.pop()
        if(getSum(x,y)<=k){
            // console.log(x,y)
            res++;
        }
        for(let i=0;i<4;i++){
            let curX=x+xs[i]
            let curY=y+ys[i]
            if(curX<0||curX>=m||curY<0||curY>=n||getSum(curX,curY)>k||visited[curX][curY]){
                continue
            }
            stack.push({
                x:curX,
                y:curY
            })
            visited[curX][curY]=true;
        }

    }
    return res;

};
function getSum(a,b){
    let aArr=a.toString().split('').map(n=>+n)
    let bArr=b.toString().split('').map(n=>+n)
    let asum=aArr.reduce((p,q)=>p+q,0)
    let bsum=bArr.reduce((p,q)=>p+q,0)
    return asum+bsum
}


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    // 地推
    let grid=[]
    for(let i=0;i<m;i++){
        grid[i]=[]
    }
    grid[0][0]=1;
    let res=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            let can=false;
            if(getSum(i,j)>k||(i==0&&j==0)){
                continue
            }
            if(i>0 && grid[i-1][j]){
                can=true;
            }
            if(j>0 && grid[i][j-1]){
                can=true;
            }
            if(can){
                res++
            }
            grid[i][j]=can?1:0
        }
    }
    return res
    

};