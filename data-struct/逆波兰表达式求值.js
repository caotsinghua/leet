/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let nums=[]
    let ops=[]

    for(let i=0;i<tokens.length;i++){
        if(!Number.isNaN(+tokens[i])){
            // 数字
            nums.push(+tokens[i])
        }else{
            let b=nums.pop()
            let a=nums.pop()
            let r=0
            switch(tokens[i]){
                case '+':{
                    r=a+b
                    nums.push(r)
                    break
                }
                case '*':{
                    r=a*b
                    nums.push(r)
                    break
                }
                case '/':{
                    // console.log(a,'/',b)
                    r=a/b>0?Math.floor(a/b):Math.ceil(a/b)
                    nums.push(r)
                    break
                }
                case '-':{
                    r=a-b
                    nums.push(r)
                    break
                }
            }
            // console.log(r)
        }
    }
    return nums.pop()
};