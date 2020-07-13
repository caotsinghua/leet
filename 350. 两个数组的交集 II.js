/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map1 = {}
  let map2 = {}
  let len1 = nums1.length
  let len2 = nums2.length
  let nums = len1 < len2 ? nums1 : nums2
  nums1.forEach((n) => {
    if (map1[n]) {
      map1[n]++
    } else {
      map1[n] = 1
    }
  })
  nums2.forEach((n) => {
    if (map2[n]) {
      map2[n]++
    } else {
      map2[n] = 1
    }
  })
  let result = []
  let has = {}
  nums.forEach((n) => {
    if (!has[n] && map1[n] && map2[n]) {
      let t = Math.min(map1[n], map2[n])
      while (t--) {
        result.push(n)
      }
      has[n] = true
    }
  })
  return result
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {}

  let len1 = nums1.length
  let len2 = nums2.length
  if (len1 > len2) {
    let t = nums1
    nums1 = nums2
    nums2 = t
  }

  nums1.forEach((n) => {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  })
  let result = []
  nums2.forEach((n) => {
    if (map[n]) {
      map[n]--
      result.push(n)
    }
  })
  return result
}
