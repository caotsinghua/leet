/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length===0) return 0;
    let leftIndex=0;
    let rightIndex=height.length-1;
    let leftMax=height[0];
    let rightMax=height[rightIndex];
    let result=0;

    for(let i=1;i<height.length;i++){
        let curHeight=height[i];
        leftIndex=0;
        rightIndex=height.length-1;
        leftMax=height[0];
        rightMax=height[rightIndex];
        while(leftIndex<i){
            leftMax=Math.max(leftMax,height[leftIndex++])
        }
        while(rightIndex>i){
            rightMax=Math.max(rightMax,height[rightIndex--])
        }

        if(!(curHeight<leftMax&&curHeight<rightMax)){
            continue;
        }
        let diff=Math.min(leftMax,rightMax)-curHeight;
        result+=diff;
    }
    return result

};


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length===0) return 0;
    let leftIndex=0;
    let rightIndex=height.length-1;
    let leftMax=height[leftIndex];
    let rightMax=height[rightIndex]
    let result=0
    while(leftIndex<rightIndex){
        leftMax=Math.max(leftMax,height[leftIndex])
        rightMax=Math.max(rightMax,height[rightIndex])
        if(leftMax<rightMax){
            let curHeight=height[leftIndex+1]
            //高度由左边决定
            if(curHeight<leftMax){
                let diff=leftMax-curHeight;
                result+=diff;
            }
            leftIndex++;
        }else{
            let curHeight=height[rightIndex-1]
            if(curHeight<rightMax){
                let diff=rightMax-curHeight;
                result+=diff;
            }
            rightIndex--;
        }
    }
    return result

};