/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.source=[]
    this.sortArray=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.source.push(x)
    let i=0;
    for(i=0;i<this.sortArray.length;i++){
            if(this.sortArray[i]>=x){
                break;
            }
    }
    this.sortArray.splice(i,0,x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const x=this.source.pop()
    const findIndex=this.sortArray.indexOf(x)
    this.sortArray.splice(findIndex,1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.source[this.source.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sortArray[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */