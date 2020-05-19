/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let p=Math.floor(Math.sqrt(n))
    if(p*p===n) return 1;
    let queue=[]
    for(let i=p;i>=1;i--){
        queue.push(
            {
                value:i,
                left:n-i*i,
                deep:1
            }
        )
    }
    // let count=0;
    while(queue.length>0){
        let cur=queue.shift()
        
        if(cur.left===0) return cur.deep
        for(let k=cur.value;k>=1;k--){
            let left=cur.left-k*k;
            if(left===0 ) return cur.deep+1
            if(left>=0){
                // console.log(left,k)
                queue.push({
                    value:k,
                    left,
                    deep:cur.deep+1
                })
            }
        }
        
    }
};