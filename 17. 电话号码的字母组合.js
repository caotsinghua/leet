/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }
  const res = []

  function loop(tmp, nums) {
    if (nums.length === 0) {
      tmp && res.push(tmp)
      return
    }
    let curNum = nums[0]

    const chs = map[curNum]
    nums = nums.slice(1)
    for (let i = 0; i < chs.length; i++) {
      loop(tmp + chs[i], nums)
    }
  }
  loop("", digits)
  return res
}
