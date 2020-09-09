/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.len = 0
  this.arr = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.len === 0) {
    this.arr.push(num)
  } else {
    // 找到插入位置
    // 找到第一个比num大的位置
    let l = 0,
      r = this.len
    while (l < r) {
      let m = Math.floor((l + r) / 2)
      if (this.arr[m] <= num) {
        l = m + 1
      } else {
        r = m
      }
    }
    this.arr.splice(l, 0, num)
  }
  this.len++
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let mid = Math.floor(this.len / 2)
  if (this.len === 0) return 0
  if (this.len % 2 === 0) {
    return (this.arr[mid] + this.arr[mid - 1]) / 2
  } else {
    return this.arr[mid]
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
