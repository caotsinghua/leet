/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function find(l, r, tar) {
    while (l < r) {
      let mid = Math.floor((l + r) / 2)
      if (nums[mid] < tar) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }
  function find2(l, r, tar) {
    while (l < r) {
      let mid = Math.floor((l + r) / 2)
      if (nums[mid] <= tar) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }

  let id1 = find(0, nums.length - 1, target)
  if (nums[id1] !== target) {
    return [-1, -1]
  } else {
    let id2 = find2(id1 + 1, nums.length - 1, target)
    // console.log(id2)
    if (nums[id2] == target) {
      return [id1, id2]
    }
    if (nums[id2 - 1] === target) {
      return [id1, id2 - 1]
    }
    return [id1, -1]
  }
}

console.log(searchRange([3, 3, 3], 3))
