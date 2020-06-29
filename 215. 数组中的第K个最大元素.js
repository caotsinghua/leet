/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let arr = []
  let i = 0
  for (i = 0; i < nums.length; i++) {
    insert(arr, nums[i], k)
  }
//   console.log(arr)
  return arr[k - 1]
}

function insert(arr, value, k) {
  let index = 0
// console.log(arr,value)
  if (arr.length < k) {
    for (index = 0; index < arr.length; index++) {
      if (arr[index] <= value) {
        break
      }
    }
    arr.splice(index, 0, value)
  }
  // 从大到小 arr
  // 只要比最小的大，就插入到合适的位置
  else if (value >= arr[arr.length - 1]) {
    // 找到第一个比value大的元素
    for (index = 0; index < arr.length - 1; index++) {
      if (arr[index] <= value) {
        break
      }
    }
    arr.splice(index, 0, value)
    arr.pop()
  }
}
