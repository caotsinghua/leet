/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  if (pushed.length !== popped.length) return false
  let stack = []
  let start = 0
  let pushI = 0
  while (start < popped.length) {
    if (stack[stack.length - 1] !== popped[start]) {
      if (pushI < pushed.length) {
        stack.push(pushed[pushI])
        pushI++
      } else {
        return false
      }
    } else {
      stack.pop()
      start++
    }
  }
  return true
}
