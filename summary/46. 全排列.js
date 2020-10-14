/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []
  let indexs = []
  const len = nums.length
  if(len === 0){
      return []
  }
  function dfs(temp) {
    if (temp.length === len) {
      result.push(temp)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!indexs[i]) {
        indexs[i] = true
        dfs([...temp, nums[i]])
        indexs[i] = false
      }
    }
  }
  dfs([])
  return result
}

// 套路
function func(){
    const reulst = []

    // 回溯
    function back(){
        // 满足条件，加入result
        for(let i=0;i<len;i++){
            // set i = true
            back()
            // reset i = false
        }
    }
}
