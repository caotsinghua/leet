/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let len=n;
    let start=0;
    let source=[]
    for(let i=0;i<n;i++){
        source.push(i)
    }

    while(len>1){
        // 移除
        start=(start+m-1)%len
        console.log(start)
        len--;
    }
    console.log(start)
};

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    function loop(n,m){
        if(n===1) return 0
        let x=loop(n-1,m);
        return (x+m)%n
    }
    
    return loop(n,m)
};

var lastRemaining = function(n, m) {
    let x=0;
    for(let i=1;i<=n;i++){
        x=(x+m)%i;
    }
    return x
};