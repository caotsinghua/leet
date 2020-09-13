var MaxQueue = function () {
  this.queue = []
  this.dequeue = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.dequeue.length) {
    return this.dequeue[0]
  }
  return -1
}


/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value)
  while (this.dequeue.length && this.dequeue[this.dequeue.length - 1] < value) {
    this.dequeue.pop()
  }
  this.dequeue.push(value)

}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if(this.queue.length){
        let v = this.queue.shift()
        if(v === this.dequeue[0]){
            this.dequeue.shift()
        }
        return v
    }
    return -1
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
