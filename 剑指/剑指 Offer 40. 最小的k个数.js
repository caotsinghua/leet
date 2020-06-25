/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const queue = []
  let size = 0

  for (let i = 0; i < arr.length; i++) {
    if (size < k) {
      let j = 0
      for (j = 0; j < size; j++) {
        if (queue[j] >= arr[i]) {
          // 找到第一个比当前大的
          break
        }
      }
      queue.splice(j, 0, arr[i])
      //   保证从小到大排列
      size++
    } else {
      if (arr[i] < queue[size - 1]) {
        queue.pop()
        let j = 0
        for (j = 0; j < size; j++) {
          if (queue[j] >= arr[i]) {
            // 找到第一个比当前大的
            break
          }
        }
        queue.splice(j, 0, arr[i])
      }
    }
  }
  return queue
}
