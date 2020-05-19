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
var copyRandomList = function(head) {
    let map=new Map();
    let tHead={
        next:head,
    }
    let p=tHead;
    let originNext=head;
    let cur=head;
    while(originNext){
        let newNext=null;
        if(originNext){
            if(!map.get(originNext)){
                newNext=new Node(originNext.val,null,null)
                map.set(originNext, newNext)
            }else{
                newNext=map.get(originNext)
            }
        }
        p.next=newNext;
        p=p.next;
        originNext=originNext.next;
    }
    p=tHead.next;

    while(cur){
        let newRandom=null;
        let trandom=cur.random;
        if(trandom){
            if(!map.get(trandom)){
                newRandom=new Node(trandom.val,null,null)
                map.set(trandom, newRandom)
            }else{
                newRandom=map.get(trandom)
            }
        }
        p.random=newRandom;
        p=p.next;
        cur=cur.next;
    }
    return tHead.next;

};

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
var copyRandomList = function(head) {
    const map=new Map()
    function copy(node){
        if(!node) return null;
        let tnode=null;
        if(map.has(node)){
            console.log(node.val)
            return map.get(node)
        }
        
        tnode=new Node(node.val,null,null)
        map.set(node,tnode)
        tnode.next=copy(node.next)
        tnode.random=copy(node.random)
        return tnode
    }
    return copy(head)
}