/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let prevs=[]
    intervals.sort((a,b)=>{
        let s1=a[0]
        let s2=b[0]
        return s1-s2
    })
    for(let i=0;i<intervals.length;i++){
        let prev=prevs.pop();
        let cur=intervals[i]
        if(prev){
            let mergeRes=judge(prev,cur)
            if(mergeRes){
                prevs.push(mergeRes)
            }else{
                prevs.push(prev,cur)
            }
        }else{
            prevs.push(cur)
        }
    }
    return prevs;

};
function judge(prev,cur){

    let [s1,e1]=prev;
    let [s2,e2]=cur;
    if(e1<s2||s1>e2) return false;
    let s=Math.min(s1,s2)
    let e=Math.max(e1,e2)
    return [s,e]
}
