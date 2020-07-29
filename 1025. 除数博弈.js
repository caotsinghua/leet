/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  let t = 0
  let n = N
  while (n >= 2) {
    let k
    for (k = n - 1; k >= 1; k--) {
      if (n % k === 0) {
        // finded
        n = n - k
        console.log(n, k)
        t++
        break
      }
    }

    if (k < 1) {
      return t % 2 === 1
    }
  }
  console.log(t)
  return t % 2 === 1
}

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  let f = []
  f[1] = false
  for (let i = 2; i <= N; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && !f[i - j]) {
        f[i] = true
      }
    }
  }
  return !!f[N]
}
