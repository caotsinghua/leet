/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k == 0) return []
  if (k == 1 || nums.length === 0) return nums

  let deqeueue = []
  let result = []
  for (let i = 0; i < k; i++) {
    while (deqeueue.length && deqeueue[deqeueue.length-1] < nums[i]) {
      deqeueue.pop()
    }
    // 队列首位一定是最大的
    deqeueue.push(nums[i])
  }
  let j = 1 // 开始位置
  result[0] = deqeueue[0]

  for (let i = k; i < nums.length; i++,j++) {
    //   删除j-1
    if (deqeueue[0] === nums[j - 1]) {
      deqeueue.shift()
    }
    while (deqeueue.length && deqeueue[deqeueue.length-1] < nums[i]) {
      deqeueue.pop()
    }
    deqeueue.push(nums[i])
    result[i - k + 1] = deqeueue[0]

  }
  return result
}
