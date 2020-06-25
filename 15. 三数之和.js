/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let first=0,second=0
    nums.sort((a,b)=>a-b)
    console.log(nums)
    const res=[]
    for(first =0;first < nums.length;first++){
        if(nums[first]===nums[first-1]){
            continue
        }
        let third=nums.length-1
        for(second = first+1;second<nums.length;second++){
            
            if(second > first+1 && nums[second]===nums[second-1]){
                continue
            }
           
            while(second < third && nums[second]+nums[third]+nums[first]>0){
                if(nums[first]===-1 && nums[second] === -1){
                    console.log(nums[first],nums[second],nums[third])
                }
                third--
            }
     
            
            // 指针重合，不会再有b<c && a+b+c =0的值
            if(second === third){
                break
            }
            if(nums[second]+nums[third]+nums[first] === 0){
                res.push([nums[first],nums[second],nums[third]])
            }

        }
    }
    return res
};