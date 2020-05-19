/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    function find(target,left,right,isReverse){
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            const midV=mountainArr.get(mid)
            if(midV===target){
                return mid;
            }
            if(midV>target){

                if(isReverse){
                    left=mid+1;
                }else{
                    right=mid-1;
                }
            }else{

                if(isReverse){
                    right=mid-1;
                }else{
                    left=mid+1;
                }
            }
        }
        return -1
    }

    let left=0;
    let right=mountainArr.length()-1;
    while(left<right){
        let mid=Math.floor((left+right)/2)
        if(mountainArr.get(mid+1)>mountainArr.get(mid) ){
            left=mid+1;
        }else{
            right=mid;
        }
    }
    let highIndex=left;
    let f1=find(target,0,highIndex,false)
    if(f1!==-1){
        return f1;
    }else{
        let f2=find(target,highIndex+1,mountainArr.length()-1,true)
        // console.log("ffff2")
        if(f2!==-1){
           return f2;
        }
    }
    return -1;
};
