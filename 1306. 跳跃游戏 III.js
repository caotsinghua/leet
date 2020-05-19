/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let visited={}
    let queue=[]
    queue.push(start)
    visited[start]=true
    if(arr[start]===0) return true;
    while(queue.length){
        let cur=queue.shift()
        let toPre=cur-arr[cur]
        let toNext=cur+arr[cur]
        if(toPre>=0&&!visited[toPre]){
            if(arr[toPre]===0) return true;
            visited[toPre]=true;
            queue.push(toPre)
        }
        if(toNext<=arr.length-1 && !visited[toNext]){
            if(arr[toNext]===0) return true;
            visited[toNext]=true;
            queue.push(toNext)
        }
    }
    return false;
};
