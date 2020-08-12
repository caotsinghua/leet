/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let map = new WeakMap() // 某节点的node
  //   let visited = new WeakSet() // 该节点客隆过与否
  function clone(node) {
    if (!node) return null
    if (map.has(node)) {
      // 该节点克隆过
      return map.get(node)
    }
    let newNode = new Node(node.val, [])
    map.set(node, newNode)
    if (node.neighbors) {
      for (let i = 0; i < node.neighbors.length; i++) {
        const originNode = node.neighbors[i]
        const cloned = clone(originNode)
        map.set(originNode, cloned)
        newNode.neighbors[i] = cloned
      }
    }
    return map.get(node)
  }
  return clone(node)
}
