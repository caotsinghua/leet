/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let res=0;
    const len=nums.length;
    let indexes=[];

    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===1){
            indexes.push(i);
        }
    }
    // console.log(indexes)
    if(indexes.length<k){
        return 0;
    }

    // function getsum(s,e){
    //     let pre=indexes[s]
    //     let end=indexes[e];
    //     let front=pre;
    //     let last=len-indexes[e]-1;
    //     console.log(s,e)
    //     console.log(pre,end)
    //     console.log(front,last)
    //     if(s>0){
    //         front=pre-indexes[s-1];
    //     }
    //     if(e<indexes.length-1){
    //         last=indexes[e+1]-end;
    //     }


    //     return (front+last)*2+Math.min(last,front);
    // }
    let relen=indexes.length;
    indexes[-1]=-1;
    indexes[relen]=len;

    for(let i=0;i<=relen-k;i++){
        res+=(indexes[i]-indexes[i-1])*(indexes[i+k]-indexes[i+k-1])
    }

    return res;
};
