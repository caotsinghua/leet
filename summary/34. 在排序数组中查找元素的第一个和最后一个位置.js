/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 找第一个比t 小的数
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    let m = Math.floor((l + r + 1) / 2)
    if (nums[m] >= target) {
      r = m - 1
    } else {
      l = m
    }
  }
  let start = nums[l] === target ? l : nums[l + 1] === target ? l+1 : -1
  if(start === -1){
      return [-1,-1]
  }
  l = start
  r= nums.length -1
  while(l<r){
      let m  = Math.floor((l+r)/2)
      if(nums[m] <= target){
          l = m+1
      }else{
          r = m
      }
  }
  let end = nums[l] === target ? l : nums[l - 1] === target ? l-1 : -1
  return [start,end]
}
