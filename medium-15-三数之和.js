/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let arr = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          if (!hasSame(arr, [nums[i], nums[j], nums[k]])) {
            arr.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  return arr;
};

function isSame(arr1, arr2) {
  const arrA = arr1.sort();
  const arrB = arr2.sort();
  for (let i = 0; i < arrA.length - 1; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }
  return true;
}
function hasSame(arrs, arr) {
  for (let i = 0; i < arrs.length; i++) {
    if (isSame(arrs[i], arr)) return true;
  }
  return false;
}
