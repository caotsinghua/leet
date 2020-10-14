/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.data=[]
    this.numIndexMap=new Map()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.numIndexMap.has(val)){
        return false
    }
    this.data.push(val)
    this.numIndexMap.set(val,this.data.length-1)
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.numIndexMap.has(val)){
        let delIndex = this.numIndexMap.get(val)
        let last = this.data.length-1
        let t = this.data[last]
        // console.log("del ",val)
        this.data[last] = val
        this.data[delIndex] = t
        this.numIndexMap.set(t,delIndex)
        this.numIndexMap.delete(val)
        // console.log(this.data)
        this.data.pop()
        // console.log(this.data)
        return true
    }else{
        return false
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if(this.data.length > 0){
        return this.data[Math.floor(Math.random()*this.data.length)]
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */