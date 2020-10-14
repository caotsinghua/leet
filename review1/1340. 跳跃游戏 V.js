/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function (arr, d) {
  let dp = []
  arr.forEach((_, i) => (dp[i] = -1))
  function f(i) {
    if (dp[i] !== -1) return //计算过了
    dp[i] = 1
    
    // 向左跳
    for(let j = i-1;j>=i-d&&j>=0;j--){
        if(arr[i]>arr[j]){
            f(j)
            dp[i]=Math.max(dp[i],dp[j]+1)
        }else{
            break
        }
    }
    for(let j = i+1;j<=i+d&&j<arr.length;j++){
        if(arr[i]>arr[j]){
            f(j)
            dp[i]=Math.max(dp[i],dp[j]+1)
        }else{
            break
        }
    }
    
  }

  for (let i = 0; i < arr.length; i++) {
    f(i)
  }

  return Math.max(...dp)
}
