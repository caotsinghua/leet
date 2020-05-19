function solution(){
    let vs=[]
    let ws=[]
    for(let i=1;i<=N;i++){
        for(let j=0;j<V;j++){
            // f[i][j]=f[i-1][j]
            // if(j>=v[i]){
            //     f[i][j]=Math.max(f[i-1][j],f[i][j-v[i]]+w[i])
            // }
            f[j]=Math.max(f[j],f[j-v[i]]+w[i])
        }
    }
}
