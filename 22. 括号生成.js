/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack=[{
        value:'(',
        left:n-1,
        right:n,
        res:'(',
        sum:-1
    }]
    let result=[]
    
    while(stack.length){
        const {value,left,right,res,sum}=stack.pop()
        if(left===0 && right===0 && sum===0&&value===')'){
            result.push(res)
        }
        if(left>0){
            stack.push({
                value:'(',
                left:left-1,
                right,
                res:res+'(',
                sum:sum-1
            })
        }
        if(right>0 && sum<0){
            stack.push({
                value:')',
                left,
                right:right-1,
                res:res+')',
                sum:sum+1
            })
        }
    }
    return result;
    


};