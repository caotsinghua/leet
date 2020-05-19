/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack=[]
    let res=[]
    let days=0;
    stack.push({
        value:T[0],
        day:0
    })
    let index=1;
    while(index<T.length){
     
        while(stack.length&&stack[stack.length-1].value<T[index]){
            let t=stack.pop()
            res[t.day]=index-t.day;
        }
        stack.push({
            value:T[index],
            day:index
        })
        index++
    }
    while(stack.length){
        let t=stack.pop()
        res[t.day]=0
    }
    return res
};