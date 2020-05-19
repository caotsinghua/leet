/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    let len=Math.floor(nums.length/3);
    if(len===0) return Array.from(new Set(nums))
    nums.sort();
    let result=new Set()
    let c=nums[0]
    let count=1;
    
    for(let i=1;i<nums.length;i++){
        if(c===nums[i]){
            count++
        }else{
            count=1;
            c=nums[i]
        }
        if(count>len){
            result.add(c)
            count=1;
            c=nums[++i]
        }
    }
    return Array.from(result)
};

// 投票法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length==1) return nums;
    let c1=nums[0]
    let c2=nums[1]
    let count1=0;
    let count2=0;
    for(let i=0;i<nums.length;i++){
        if(c1===nums[i]){
            count1++;
        }else if(c2===nums[i]){
            count2++;
        }else if(count1===0){
            count1=1;
            c1=nums[i]
        }else if(count2===0){
            count2=1;
            c2=nums[i]
        }else {
            // 1 2 3 2
            count1--;
            count2--;
        }

    }
    console.log(c1,c2,count1,count2)
    let result=[];
    count1= 0;
    count2= 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===c1) count1++;
        if(nums[i]===c2) count2++;
    }
    if(count1>Math.floor(nums.length/3)) result.push(c1)
    if(count2>Math.floor(nums.length/3) && c2!==c1) result.push(c2)
    
    return result
    
};