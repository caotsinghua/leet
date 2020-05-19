/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    const dp=[]
    const len=arr.length;
    // dp[i]=max(dp[j])+1
    arr.forEach((v,i)=>{
        dp[i]=-1;
    })
    function dfs(i){
        if(dp[i]!==-1) return;
        dp[i]=1
        for(let j=i-1;j>=i-d;j--){
            if(j>=0&&j<arr.length&& arr[i]>arr[j]){
                dfs(j)
                dp[i]=Math.max(dp[i],dp[j]+1)
            }else{
                break
            }
        }
        for(let j=i+1;j<=i+d;j++){
            if(j>=0&&j<arr.length&& arr[i]>arr[j]){
                dfs(j)
                dp[i]=Math.max(dp[i],dp[j]+1)

            }else{
                break
            }
        }

    }
    for(let i=0;i<arr.length;i++){
        dfs(i)
    }
    console.log(dp)
    return Math.max(...dp)
};
