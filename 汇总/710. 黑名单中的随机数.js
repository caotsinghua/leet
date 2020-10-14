/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function (N, blacklist) {
  this.size = N - blacklist.length
  this.blackMap = {}

  if (N > 0) {
    let blackMap = this.blackMap
    blacklist.forEach((n) => (blackMap[n] = true))
    // move black
    // let delStart = N - blacklist.length
    let swapLast = N - 1
    for (let i = 0; i < blacklist.length; i++) {
      if (blacklist[i] >= this.size) {
        continue
      }
      while (blackMap[swapLast] != undefined) {
        swapLast--
      }
      blackMap[blacklist[i]] = swapLast
      swapLast--
    }
  }
}

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
//   console.log(this.blackMap)
  let n = Math.floor(Math.random() * this.size)
  if (this.blackMap[n] != undefined) {
    return this.blackMap[n]
  } else {
    return n
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */
