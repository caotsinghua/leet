/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let combined = []
  let s1 = 0
  let s2 = 0
  while (s1 < nums1.length && s2 < nums2.length) {
    if (nums1[s1] <= nums2[s2]) {
      combined.push(nums1[s1])
      s1++
    } else {
      combined.push(nums2[s2])
      s2++
    }
  }
  while (s1 < nums1.length) {
    combined.push(nums1[s1++])
  }
  while (s2 < nums2.length) {
    combined.push(nums2[s2++])
  }
  let mid = Math.floor(combined.length / 2)
  if (combined.length % 2 === 0) {
    return (combined[mid] + combined[mid - 1]) / 2
  } else {
    return combined[mid]
  }
}
// console.log(findMedianSortedArrays([1, 2], [3,4]))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // i+j=(m+n+1)/2 => j=(m+n+1)/2 - i
  if (nums1.length > nums2.length) {
    let t = nums2
    nums2 = nums1
    nums1 = t
  }
  let left = 0
  let right = nums1.length
  let m = nums1.length
  let n = nums2.length
  while (left < right) {
    // 满足leftpart的部分和rightpart数量相等
    let i = Math.floor((left + right - 1) / 2) // leftA
    let j = Math.floor((m + n + 1) / 2) - i // leftB
    // 判断，leftA的最后元素 小于 rightB的第一个
    // leftB最后 小于 rightA第一个
    // 分割线，i-1 j-1
    if (nums2[j - 1] > nums1[i]) {
      left = i + 1
    } else {
      right = i
    }
  }
  let i = left
  let j = Math.floor((m + n + 1) / 2) - i
  let l_a_max = i === 0 ? -Infinity : nums1[i - 1]
  let r_a_min = i === m ? Infinity : nums1[i]
  let l_b_max = j === 0 ? -Infinity : nums2[j - 1]
  let r_b_min = j === n ? Infinity : nums2[j]
  if ((m + n) % 2 === 1) {
    return Math.max(l_a_max, l_b_max)
  } else {
    let a = Math.max(l_a_max, l_b_max)
    let b = Math.min(r_a_min, r_b_min)
    return Math.floor((a + b) / 2)
  }
}
console.log(findMedianSortedArrays([1, 2,3], [3,4]))
