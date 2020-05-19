/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stackListHead=new LinkNode(null)
    this.minStackListHead=new LinkNode(null)
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let p=this.stackListHead;
    let node=new LinkNode(x);
    // 头插
    node.next=p.next;
    node.before=p;
    p.next=node;

    let sortP=this.minStackListHead.sortNext;
    let pre=this.minStackListHead;
    while(sortP && sortP.val <x){
        pre=sortP;
        sortP=sortP.sortNext;
    }

    // 插在sortP前面
    if(!sortP){
        // head
        pre.sortNext=node
        node.sortBefore=pre
        node.sortNext=null
    }else{
        sortP.sortBefore.sortNext=node
        node.sortBefore=sortP.sortBefore
        node.sortNext=sortP
        sortP.sortBefore=node
    }
    // this.getData()
};
MinStack.prototype.getData=function(){
    let p1=this.stackListHead.next
    let p2=this.minStackListHead.sortNext
    const min=[]
    const stack=[]
    while(p1){
        stack.push(p1.val)
        p1=p1.next
    }
    while(p2){
        min.push(p2.val)
        p2=p2.sortNext
    }
    console.log({
        min,stack
    })
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const node=this.stackListHead.next;
    if(node){
        // 断开
        const before=node.before
        const next=node.next
        const sortBefore=node.sortBefore
        const sortNext=node.sortNext
        before.next=next
        if(next){
            next.before=before
        }
        if(sortBefore){
            sortBefore.sortNext=sortNext
        }
        if(sortNext){
            sortNext.sortBefore=sortBefore
        }
    }
    // console.log("pop")
    // this.getData()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const node=this.stackListHead.next
    if(node){
        return node.val
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const node=this.minStackListHead.sortNext;
    if(node){
        return node.val
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 function LinkNode(val){
    this.val=val
    this.before=null
    this.next=null
    this.sortNext=null
    this.sortBefore=null
 }

