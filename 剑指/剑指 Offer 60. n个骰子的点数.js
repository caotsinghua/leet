/**
 * @param {number} n
 * @return {number[]}
 */
// 1 2 3 4 5 6
//
var twoSum = function (n) {
  let p = []
  const px = 1 / 6
  const map = {}

  function bfs() {
    let queue = Array(6).fill({
      v: 0,
      p: 1,
    })
    let deep = 0
    while (queue.length && deep < n) {
      let size = queue.length
      if (deep === n) {
        map = {}
      }
      while (size) {
        let cur = queue.shift()
        for (let i = 0; i <= 5; i++) {
          let v = i + 1 + cur.v
          queue.push({
            v: v,
            p: cur.p * px,
          })
          if (deep === n - 1) {
            if (map[v]) {
              map[v] += 1
            } else {
              map[v] = 1
            }
          }
        }
        size--
      }
      deep++
    }
  }

  bfs()
  console.log(map)
  let result = Object.keys(map)
    .sort((a, b) => a - b)
    .map((it) => map[it])

  return result
}

/**
 * @param {number} n
 * @return {number[]}
 */
// 1 2 3 4 5 6
//
var twoSum = function (n) {
  let dp = []
  for (let i = 0; i < n; i++) {
    dp[i] = []
  }

  for (let i = 1; i <= 6; i++) {
    dp[0][i] = 1
  }

  for (let i = 1; i < n; i++) {
    //   可能的和
    for (let j = i + 1; j <= 6 * (i + 1); j++) {
      for (let cur = 1; cur <= 6; cur++) {
        if (j - cur <= 0) {
          break
        }
        if (dp[i][j] == undefined) {
          dp[i][j] = 0
        }
        dp[i][j] = dp[i][j] + (dp[i - 1][j - cur] || 0)
      }
    }
    // console.log(dp[i])
  }

  let result = []
  const all = Math.pow(6, n)
  for (let i = n; i <= 6 * n; i++) {
    result.push(dp[n - 1][i] / all)
  }
  return result
}

/**
 * @param {number} n
 * @return {number[]}
 */
// 1 2 3 4 5 6
//
var twoSum = function (n) {
  let dp = [1, 1, 1, 1, 1, 1]

  for (let i = 2; i <= n; i++) {
    //   可能的和
    for (let j = 6 * i; j >= i; j--) {
      dp[j - 1] = 0
      for (let cur = 1; cur <= 6; cur++) {
        if (j - cur < i - 1) {
          break
        }
        dp[j - 1] += dp[j - cur - 1] || 0
      }
    }
    // console.log(dp[i])
  }

  let result = []
  const all = Math.pow(6, n)
  for (let i = n; i <= n * 6; i++) {
    result.push(dp[i - 1] / all)
  }
  return result
}
