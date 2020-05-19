/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.dataMap={} // 存储key，value
    this.countMap={} // 存储次数和双向链表
    this.capacity=capacity;
    this.size=0;
    this.MAX_VSITED_COUNT=0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    const node=this.dataMap[key]
    // console.log(this.dataMap)
    if(!node){
        // 没有key
        return -1;
    }
    
    this.updateNode(node);
    return node.value;
}
// 更新节点次数
LFUCache.prototype.updateNode=function(node){
    const originCount=node.count; // 原始次数
    this.countMap[originCount].delete(node); // 原countMap删除节点
    let newCountList=this.countMap[originCount+1];
    if(!newCountList){
        newCountList=new TwoLink()
        this.countMap[originCount+1]=newCountList;
    }
    node.count=originCount+1; // 访问次数加1
    this.countMap[originCount+1].unshift(node); // 头部插入节点
    if(originCount>this.MAX_VSITED_COUNT){
        this.MAX_VSITED_COUNT=originCount;
    }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    const node=this.dataMap[key]
    if(!node){
        // 插入节点
        // console.log("插入节点",this.size,this.capacity)
        // console.log("当前countmap",this.countMap)
        if(this.size+1 > this.capacity){
            // 无法添加
            // 是否可删除
            if(this.size===0){
                // 无法删除
            }else{

                // 删除最少次数/最近最少使用的节点
                let minCount=1;
                
                for(;minCount<=this.MAX_VSITED_COUNT;minCount++){
                    // 找到有节点的
                    if(this.countMap[minCount] && !this.countMap[minCount].isEmpty()){
                        break;
                    }
                }
                const minList=this.countMap[minCount];
                const deleteNode=minList.pop(); // 删除相同次数的最少使用的节点
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
            newNode.count=1;
            this.MAX_VSITED_COUNT=1;
            let countList=this.countMap[1];
            if(!countList){
                countList=new TwoLink()
                this.countMap[1]=countList;
            }
            countList.unshift(newNode)
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
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// 双向链表节点
 function Node(value){
    this.value=value;
    this.key='';
    this.count=0; // 更新次数的时候，定位到node，删除原countmap链表节点，插入新count
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