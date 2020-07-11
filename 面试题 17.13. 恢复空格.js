/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  let dic = ""
  dictionary.forEach((t) => (dic += t))
  let i = 0,
    j = 0
  let res = 0
  while (j < sentence.length && i < dic.length) {
    while (dic[i] !== sentence[j] && j < sentence.length) {
      j++
      res++
      console.log(dic[i])
    }
    // dic[i]===s[j]
    if (j < sentence.length) {
      i++
      j++
    }
  }
  if (j === sentence.length) {
    console.log("句子读完")
    // 句子读完
    return res
  } else {
    // 词典读完
    console.log(res, sentence.length, j)
    return res + sentence.length - j
  }
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  const map = {}
  dictionary.forEach((w) => (map[w] = true))
  const dp = []
  //   for (let i = 0; i < sentence.length; i++) {
  //     dp[i] = 0
  //   }
  dp[-1] = 0
  for (let i = 0; i < sentence.length; i++) {
    dp[i] = dp[i - 1] + 1
    for (let j = 0; j <= i; j++) {
      let sub = sentence.substring(j, i+1)
      if (map[sub]) {
        dp[i] = Math.min(dp[i], dp[j - 1])
      } 
    }
  }
  return dp[sentence.length - 1]
}
