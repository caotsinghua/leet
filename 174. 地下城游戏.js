/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const dp = []
  for (let i = 0; i < dungeon.length; i++) {
    dp[i] = []
  }
  const colsLen = dungeon[0].length

  for (let i = dungeon.length - 1; i >= 0; i--) {
    for (let j = colsLen - 1; j >= 0; j--) {
      if (i === dungeon.length - 1 && j === colsLen - 1) {
        dp[i][j] = Math.max(1 - dungeon[i][j], 1)
        continue
      }
      let down = Infinity
      let right = Infinity
      if (i + 1 < dungeon.length) {
        down = dp[i + 1][j]
      }
      if (j + 1 < colsLen) {
        right = dp[i][j + 1]
      }
      dp[i][j] = Math.max(
        Math.min(down - dungeon[i][j], right - dungeon[i][j]),
        1
      )
    }
  }
  return dp[0][0]
}
