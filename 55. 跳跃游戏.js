/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let leftStep=0;
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]+i>=leftStep){
            leftStep=i;
        }
    }
    return leftStep===0
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxPos=0
    for(let i=0;i<nums.length;i++){
        if(i>maxPos) return false
        maxPos=Math.max(i+nums[i],maxPos)
    }
    return true
};





/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxAd=0;
    for(let i=0;i<nums.length;i++){
        if(maxAd<i) return false;
        maxAd=Math.max(i+nums[i],maxAd)
    }
    return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let left=0;
    for(let i=nums.length-1;i>=0;i--){
        if(i+nums[i]>=left){
            left=i;
        }
    }
    return left===0;
};
