/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let pNew={next:null}

    let pList=[];
    lists.forEach(l=>pList.push(l))
    let p=pNew;
    while(pList.filter(n=>!!n).length>0){
        let min=Infinity;
        let index=0;
        // 找最小的
        for(let i=0;i<pList.length;i++){
            if(pList[i]){
                if(pList[i].val<min){
                    min=pList[i].val;
                    index=i;
                }
            }
        }
        p.next=pList[index];
        pList[index]=pList[index].next;
        p=p.next;
    }
    p.next=null;
    return pNew.next;
};



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const resHead={next:null};
    let res=resHead;
    // 每次拿k个链表中的最小的一个，直到全部为空
    const headList=lists;
    while(true){
        // console.log(headList)
        if(headList.filter(t=>!!t).length===0) break;
        let min=new ListNode(Infinity);
        let minIndex=-1;
        for(let i=0;i<headList.length;i++){
            if(headList[i]&&headList[i].val<=min.val){
                min=headList[i];
                minIndex=i;
            }
        }
        if(minIndex>-1){
            headList[minIndex]=headList[minIndex].next;
            if(!headList[minIndex]){
                headList.splice(minIndex,1)
            }
            res.next=min;
            res=res.next;
        }
    }
    return resHead.next;
};
