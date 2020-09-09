/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function () {
  //
  let targetValue = [1, 2, 3] // 目标子串
  let targetShow = [3, 2, 1]
  let currentValue = [3, 2, 1, 2, 3, 4, 5, 6] // 当前子串
  let currentShow = [3, 2, 3, 2, 1, 1, 2, 3]
  let targetLen = 3 // 目标摆放长度
  let currentLen = 8 // 当前摆放长度

  // 遍历当前摆放的数组
  for (let i = 0; i < currentLen - targetLen + 1; i++) {
    //   找到啊和目标起始值一致的位置开始遍历target数组，全部一直说明找到了子串
    if (currentValue[i] == targetValue[0] && currentShow[i] === targetShow[0]) {
      let j
      for (j = 1; j < targetLen; j++) {
        if (
          currentValue[i + j] != targetValue[j] ||
          currentShow[i + j] !== targetShow[j]
        )
          break
      }
      if (j == targetLen) return i + 1
    }
  }
  return -1
}

console.log(strStr())
