/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const map=new Array(nums.length).fill(0,0,nums.length);
    for(let i=0;i<nums.length;i++){
        map[nums[i]]++;
        if(map[nums[i]]>1){
            return nums[i]
        }
    }

};

// 2分

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let l=1;
    let r=nums.length-1;
    while(l<r){
        let mid=Math.floor((l+r-1)/2);
        let cnt=0;
        for(let i=0;i<nums.length;i++){
            if(nums[i]<=mid){
                cnt++;
            }
        }
        if(cnt<=mid){
            // 不要
            l=mid+1;
        }else{
            r=mid;
        }

    }
    return l;

};