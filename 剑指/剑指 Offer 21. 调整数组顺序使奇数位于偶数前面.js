/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  const result = []
  nums.forEach((n) => {
    if ((n & 1) === 0) {
      result.push(n)
    } else {
      result.unshift(n)
    }
  })
  return result
}

// 两端指针
var exchange = function (nums) {
    let left=0,right=nums.length-1
    while(left<right){
        if(isOdd(nums[left]) && !isOdd(nums[right])){
            left++
            right--
        }else if(!isOdd(nums[left]) && isOdd(nums[right])){
            [nums[left],nums[right]]=[nums[right],nums[left]]
            left++
            right--
        }else if(isOdd(nums[left]) && isOdd(nums[right])){
            // 都是奇数
            left++
        }else if(!isOdd(nums[left]) && !isOdd(nums[right])){
            right--
        }
    }
    return nums
  }
  function isOdd(n){
      return (n&1)===1
  }