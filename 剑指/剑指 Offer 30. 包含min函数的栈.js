/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack=[]
    this.numStack=[]
    this.minValue=Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.numStack.push(x)
    this.minValue=Math.min(this.minValue,x)
    this.minStack.push(this.minValue)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const v=this.numStack.pop()
    this.minStack.pop()
    this.minValue=this.min() || Infinity
    return v
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.numStack[this.numStack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */