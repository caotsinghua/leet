/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let dot=0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            dot=i+1;
        }
    }
    let find1=find(0,dot-1);
    let find2=find(dot,nums.length-1)

    function find(left,right){
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(nums[mid]>target){
                right=mid-1
            }else if(nums[mid]<target){
                left=mid+1
            }else{
                return mid;
            }
        }
        return -1;
    }
    return Math.max(find1,find2)

};

// 搜索二
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let dot=0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            dot=i+1;
        }
    }
    let find1=find(0,dot-1);
    let find2=find(dot,nums.length-1)

    function find(left,right){
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(nums[mid]>target){
                right=mid-1
            }else if(nums[mid]<target){
                left=mid+1
            }else{
                return mid;
            }
        }
        return -1;
    }
    return Math.max(find1,find2)!==-1

};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    while(left <= right){
        let mid=Math.floor((left+right)/2);
        console.log(mid,nums[mid])
        if(nums[mid]===target) return mid;
        if(nums[left]<nums[mid]){
            if(nums[left]<=target && nums[mid]>=target){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }else{
            // 右边有序
            if(nums[mid+1]<=target && nums[right]>=target){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
    }
    return -1;
};
