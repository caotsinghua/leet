function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = []
  dp[0] = true
  const containsMap: { [k: string]: boolean } = {}
  wordDict.forEach((k) => {
    containsMap[k] = true
  })
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const rest = s.substring(j, i)
      if (dp[j] && containsMap[rest]) {
        dp[i] = dp[j] && containsMap[rest]
      }
    }
  }
//   console.log(dp)
  return !!dp[s.length]
}
