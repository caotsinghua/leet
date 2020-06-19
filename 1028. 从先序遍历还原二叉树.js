/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let tmp = ""
  let i = 0
  while (i < S.length) {
    if (S[i] === "-") {
      break
    }
    tmp += S[i]
    i++
  }
  let deep = 0
  // 得到根元素
  let root = new TreeNode(tmp)

  let stack = []
  stack.push({
    node: root,
    deep:0,
  })
  tmp = ""
  while (i < S.length) {
    deep = 0
    tmp = ""
    // get deep
    while (S[i] === "-") {
      deep++
      i++
    }
    // get num
    while (S[i] !== "-" && i < S.length) {
      tmp += S[i]
      i++;
    }

    let curNode = new TreeNode(tmp)
    let pre = stack[stack.length - 1]
    if (pre.deep === deep - 1) {
      pre.node.left = curNode
    } else {
      while (stack.length) {
        pre = stack.pop()
        if (pre.deep === deep - 1) {
          pre.node.right = curNode
          break
        }
      }
    }
    stack.push({
      deep,
      node: curNode,
    })
  }
  return root
}
