/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] === i){
            return i
        }
    }
    return -1
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    if(!nums || !nums.length) return -1
    let i=0
    let j=nums.length-1
    while(i<j){
        let mid = Math.floor
    }
};