function letterCombinations(digits) {
    const numMap={
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }
    let pre=[]
    let tmp=[]
    for(let i=0;i<digits.length;i++){
        let num=digits[i]
        if(pre.length === 0){
            pre=numMap[num]
        }else{
            for(let j=0;j<pre.length;j++){
                for(let k=0;k<numMap[num].length;k++){
                    tmp.push(pre[j]+numMap[num][k])
                }
            }
            pre=tmp
            tmp=[]
        }
    }
    return pre
};

// 可以用字典树
// 每次都加载字典里面
// 最后遍历一下输出