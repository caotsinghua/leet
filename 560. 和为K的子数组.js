/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res=0;
    for(let i=0;i<nums.length;i++){
        let sum=0;

        // for(let j=0;j<=i;j++){
        //     // [j .. i]
        //     // 要算n次
        // }
        for(let j=i;j>=0;j--){
            // sum(j-1)=sum(j)+nums[j-1]
            sum+=nums[j]
            if(sum===k){
                res++
            }
        }
    }
    return res
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sumMap={}
    sumMap[0]=1
    let sum=0;
    let res=0
    nums.forEach((n,i)=>{
        sum+=n;
        if(sumMap[sum-k]){
            res+=sumMap[sum-k]
        }
        // put map
        if(sumMap[sum]){
            sumMap[sum]++
        }else{
            sumMap[sum]=1
        }
    })
    return res
};
