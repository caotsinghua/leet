/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let res=0;
    nums.forEach(t=>{res^=t})
    let first=1;
    while((res&first)===0){
        first=first<<1;
    }
    let num1=0;
    let num2=0;
    // 找到第一个0
    for(let i=0;i<nums.length;i++){
        if(nums[i]&first){
            // 这一位是1
            num1^=nums[i]
        }else{
            num2^=nums[i]
        }
    }
   return [num1,num2]
};
