/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.dataMap={} // 存储key，value
    this.list=new TwoLink();
    this.capacity=capacity;
    this.size=0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node=this.dataMap[key]
    // console.log(this.dataMap)
    if(!node){
        // 没有key
        return -1;
    }
    
    this.updateNode(node);
    return node.value;
}
// 更新节点顺序
LRUCache.prototype.updateNode=function(node){
    this.list.delete(node);
    this.list.unshift(node); // 头部插入节点
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node=this.dataMap[key]
    if(!node){
        // 插入节点
     
        if(this.size+1 > this.capacity){
            // 无法添加
            // 是否可删除
            if(this.size>0){
                 // 删除最少次数/最近最少使用的节点
                 const deleteNode=this.list.pop(); // 删除相同次数的最少使用的节点
                 if(deleteNode){
                     delete this.dataMap[deleteNode.key]; // 从data中删除
                     this.size--;
                 }
            }
        }
        // 删除完成
        if(this.size+1<=this.capacity){
            // 添加节点
            const newNode=new Node(value)
            newNode.key=key;

            
            this.list.unshift(newNode)
            this.dataMap[key]=newNode;
            this.size++;
        }
    }else{
        // 更新节点
        node.value=value;
        this.updateNode(node);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// 双向链表节点
 function Node(value){
    this.value=value;
    this.key='';
   
    this.prev=null;
    this.next=null;
 }

 


 function TwoLink(){
     this.headHead=new Node(-1)
     this.tailHead=new Node(-1)
     this.tailHead.next=null;
     this.tailHead.prev=this.headHead;
     this.headHead.prev=null;
     this.headHead.next=this.tailHead;
 }


// 从最前面插入
// 放的是最新访问的节点
 TwoLink.prototype.unshift=function(node){
     const originHeadNode=this.headHead.next
    node.prev=this.headHead;
    node.next=originHeadNode;
    originHeadNode.prev=node;

    this.headHead.next=node;
 }
//  从尾部删除
TwoLink.prototype.pop=function(){
    const deleteNode=this.tailHead.prev
    const newLastNode=this.tailHead.prev.prev;
    if(newLastNode){
        newLastNode.next=this.tailHead;
        this.tailHead.prev=newLastNode;
        deleteNode.prev=null;
        deleteNode.next=null;
        return deleteNode;
    }
    return null
    
    
}

TwoLink.prototype.delete=function(node){
    const prev=node.prev;
    const next=node.next;
    // 删除
    prev.next=next;
    next.prev=prev;
    // node 断开
    node.prev=null;
    node.next=null;
}
TwoLink.prototype.isEmpty=function(){
    return this.headHead.next===this.tailHead;
}