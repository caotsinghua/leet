/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const queue=[]
    const end=arr.length-1;
    if(arr.length<=1) return 0
    if(arr[0]===arr[arr.length-1]) return 1
    queue.push(0)
    let visited={0:true}
    let map={}
    arr.forEach((v,i)=>{
        if(map[v]){
            map[v].push(i)
        }else{
            map[v]=[i]
        }
    })
    let res=0;
    while(queue.length){
        const size=queue.length
        for(let j=0;j<size;j++){
            let cur=queue.shift()
            if(cur===end) return res;
            let pre=cur-1;
            let next=cur+1;
            if(pre>=0&&!visited[pre]){
                visited[pre]=true;
                queue.push(pre)
                if(pre===end) return res+1
            }
            if(!visited[next]){
                visited[next]=true;
                queue.push(next)
                if(next===end) return res+1;
            }
            if(map[arr[cur]].length>1){
                for(let i=map[arr[cur]].length-1;i>=0;i--){
                    let jump=map[arr[cur]][i]
                    if(jump===end) return res+1;
                    if(jump!==cur&&!visited[jump]){
                        queue.push(jump)
                        visited[jump]=true;
                    }
                }
            }
        }
        res++;
    }
    return res;
};
