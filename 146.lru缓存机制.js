class LinkNode {
  constructor(key, value) {
    this.value = value
    this.next = null
    this.pre = null
    this.count = 1
    this.key = key
  }
  addCount() {
    this.count++
  }
}
class LinkList {
  constructor() {
    this.head = new LinkNode(null, null)
    this.tail = new LinkNode(null, null)
    this.head.next = this.tail
    this.tail.pre = this.head
  }
  pop() {
    // 删除第一个/
    let willDel = this.head.next
    if (willDel === this.tail) {
      return
    }
    return this.delete(willDel)
  }
  delete(node) {
    let pre = node.pre
    let next = node.next
    pre.next = next
    next.pre = pre
    node.pre = null
    node.next = null
    return node.key
  }
  add(node) {
    // 添加到末尾
    let pre = this.tail.pre
    pre.next = node
    node.pre = pre
    node.next = this.tail
    this.tail.pre = node
  }
  update(node) {
    // console.log(node)
    this.delete(node)
    this.add(node)
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.dataMap = {}
  this.useList = new LinkList()
  this.size = capacity
  this.left = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.dataMap[key]
  if (!node) return -1
  const value = node.value
  this.useList.update(node)
  return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // console.log({key,value,left:this.left}, this.dataMap)
  if (this.dataMap[key]) {
    // update
    this.dataMap[key].value = value
    this.useList.update(this.dataMap[key])
  } else {
    if (!this.left) {
      console.log("delete")
      // delete
      const delKey=this.useList.pop()
      delete this.dataMap[delKey]
      this.left++
    }
    const node = new LinkNode(key, value)
    this.dataMap[key] = node
    this.useList.add(node)
    this.left--
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
