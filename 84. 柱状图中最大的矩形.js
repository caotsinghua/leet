/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights.length===0) return 0
    // let max1=getStackMax(heights,(pre,cur)=>cur>=pre)
    let max2=getStackMax(heights,(pre,cur)=>cur<=pre)
    // console.log(max1,max2)
    // return max1>max2?max1:max2
    return max2
};

function getStackMax(heights,check){
    let stack=[]
    let pre=-1;
    let max=-1;
    for(let i=0;i<heights.length;i++){
        let cur=heights[i]
        if(check(pre,cur)){
            stack.push(cur);
            pre=cur;
        }else{
            // 非单调了
            pre=-1;
            console.log(stack)
            for(let j=0;j<stack.length;j++){
                max=Math.max(max,stack[j]*(stack.length-j))
            }
            stack=[]
        }
    }
    console.log(stack)
    if(stack.length){
        for(let j=0;j<stack.length;j++){
            max=Math.max(max,stack[j]*(stack.length-j))
        }
    }
    return max
}

// console.log(largestRectangleArea([2,1,2]))


var largestRectangleArea = function(heights) {
    let stack=[]
    let left=[]
    let right=[]
    for(let i=0;i<heights.length;i++){
        while(stack.length && heights[stack[stack.length-1]] >= heights[i] ){
            // 找到前面第一个位置比自己小的
            stack.pop();
        }
        left[i]=stack.length>0 ? stack[stack.length-1] : -1;
        stack.push(i);
    }
    stack=[];
    for(let i=heights.length-1;i>=0;i--){
        while(stack.length && heights[stack[stack.length-1]] >= heights[i] ){
            // 找到后面第一个比自己小的
            stack.pop();
        }
        right[i]=stack.length>0 ? stack[stack.length-1] : heights.length;
        stack.push(i);
    }
    // console.log(left,right)
    let res=0;
    for(let i=0;i<heights.length;i++){
        let l=left[i]
        let r=right[i]
        // console.log(heights[i],(r-l-1)*heights[i])
        res=Math.max(res,(r-l-1)*heights[i])
    }
    return res;
};
console.log(largestRectangleArea([2,1,5,6,2,3]))