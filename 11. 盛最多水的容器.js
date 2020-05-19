/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max=-Infinity;
    let leftMax=0;
    let rightMax=0;
    let leftI=0;
    let rightI=height.length-1;
    leftMax=height[leftI]
    rightMax=height[rightI]
    while(leftI<rightI){
        if(leftMax<rightMax){
            let s=(rightI-leftI)*leftMax
            if(s>max){
                max=s
            }
            leftI++;
            leftMax=height[leftI]
        }else{
            let s=(rightI-leftI)*rightMax
            if(s>max){
                max=s
            }
            rightI--;
            rightMax=height[rightI]
        }
    }
    return max
};