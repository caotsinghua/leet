/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    if(seq.length===0) return [0];
    let currentDepth=0; // 当前栈嵌套深度
    let depthArray=[] // 遍历到每个元素时的栈深度
    for(let i=0;i<seq.length;i++){
        if(seq[i]==='('){
            depthArray[i]=++currentDepth;
        }else if(seq[i]===')'){
            // 弹出栈
            depthArray[i]=currentDepth--;
        }
    }
    let result=[]
    for(let i=0;i<depthArray.length;i++){
        if(depthArray[i]%2===0){
            // 栈深度为奇数
            result[i]=1; // 给A
        }else{
            result[i]=0 // 给b
        }
    }
    return result
};

/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    if(seq.length===0) return [0];
    let result=[]
    let aDepth=0
    let bDepth=0
    for(let i=0;i<seq.length;i++){
        if(seq[i]==='('){
            // 哪个深度低给谁
            if(aDepth<bDepth){
                result[i]=0;
                aDepth++;
            }else{
                result[i]=1
                bDepth++;
            }
        }else if(seq[i]===')'){
            // 哪个高给谁
            if(aDepth>bDepth){
                result[i]=0
                aDepth--;
            }else{
                result[i]=1
                bDepth--
            }
        }
    }
    return result
};

