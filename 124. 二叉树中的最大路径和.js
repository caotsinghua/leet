/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  // 最大子序和
  // 从某节点开始
  // 到某节点结束的最大值
  //

  let res = -Infinity
  let sum = -Infinity
  const deepMap = new Map()
  function bfs() {
    let queue = []
    queue.push(root)
    let deep = 0
    while (queue.length) {
      const size = queue.length
      for (let i = 0; i < size; i++) {
        let cur = queue.shift()
        deepMap.set(cur, deep)
        if (cur.left) {
          queue.push(cur.left)
        }
        if (cur.right) {
          queue.push(cur.right)
        }
      }
      deep++
    }
  }
  bfs()
  //   console.log(deepMap.values())
  // dfs
  let preDeep = 0
  function dfs() {
    let node = root
    const stack = []
    while (stack.length || node) {
      while (node) {
        stack.push(node)
        node = node.left
      }

      const cur = stack.pop()
      let curDeep = deepMap.get(cur)
      if (res + cur.val < cur.val || Math.abs(curDeep - preDeep) > 1) {
        res = cur.val
      } else {
        res += cur.val
      }

      preDeep = curDeep

      sum = Math.max(sum, res)

      if (cur.right) {
        node = cur.right
      }
    }
  }
  dfs()

  return sum
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = (root && root.val) || -Infinity
  function getSubSum(node) {
    if (!node) {
      return 0
    }

    const left = Math.max(getSubSum(node.left), 0)
    const right = Math.max(getSubSum(node.right), 0)

    const temp = node.val + left + right
    res = Math.max(temp, res)
    return Math.max(left,right) + node.val
  }
  
  getSubSum(root)

  return res
}
