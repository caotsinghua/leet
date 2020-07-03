
var CQueue = function() {
    this.stack1=[]
    this.stack2=[]
    this.size=0
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    if(this.stack1.length){
        for(let i=0;i<this.size;i++){
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(value)
        for(let i=0;i<this.size;i++){
            this.stack1.push(this.stack2.pop())
        }
    }else{
        this.stack1.push(value)
    }
    this.size++
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.size === 0){
        return -1
    }
    let v=this.stack1.pop()
    this.size--
    return v
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */