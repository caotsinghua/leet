/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function find(){
        let left=0;
        let right=nums.length;
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(nums[mid]===target){
                return mid
            }else if(nums[mid]<target){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return -1;
    }
    let findIndex=find()
    if(findIndex===-1) return [-1,-1]
    let endIndex=findIndex+1;
    let startIndex=findIndex-1;
    while(endIndex<=nums.length-1){
        if(nums[endIndex]!==target){
            break
        }
        endIndex++
    }
    while(startIndex>=0){
        if(nums[startIndex]!==target){
            break
        }
        startIndex--
    }
    return [startIndex+1,endIndex-1]
};
