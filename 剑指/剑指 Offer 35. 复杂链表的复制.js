/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const cache = new WeakMap()
  function copy(node) {
    if (!node) return null
    if (cache.has(node)) {
      return cache.get(node)
    }
    let newNode = new Node(node.val, null, null)
    cache.set(node, newNode)
    newNode.next = copy(node.next)
    newNode.random = copy(node.random)
    
    return newNode
  }
  return copy(head)
}
