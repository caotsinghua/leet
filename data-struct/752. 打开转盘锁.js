/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const deadMap={}
    deadends.forEach(s=>deadMap[s]=true)
    // console.log(deadMap)
    const seenMap={}
    let str='0000'
    let queue=[]
    let step=0
    queue.push(str)
    queue.push(0) // 步
    seenMap[str]=true

    while(queue.length>0){
        let cur=queue.shift()
        step=queue.shift()
        if(cur==target){
            return step;
        }else{
            // 不能是死亡
            if(!deadMap[cur]){
                // console.log(cur)
                // 广度
                let arr=cur.split('')
                for(let i=0;i<4;i++){
                    for(let j=-1;j<=1;j+=2){
                        let cpArr=[...arr]
                        cpArr[i]=(cpArr[i]-0+10+j)%10
                        let as=cpArr.join('')
                        
                        if(!seenMap[as]){
                            seenMap[as]=true;
                            queue.push(as)
                            
                            queue.push(step+1)
                        }
                    }
                }
            }
        }
    }
    return -1;
};