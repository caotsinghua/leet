/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashed = {}
    for(let i=0;i<nums.length;i++){
        let left = target - nums[i]
        if(hashed[left] != null){
            return [hashed[left],i]
        }else{
            hashed[nums[i]] = i
        }
    }
}
