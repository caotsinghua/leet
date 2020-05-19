/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    if(n1===0) return 0;
    const recall={}
    let index=0; // s2的索引
    let s1Cnt=0;//1 当前s1个数
    let s2Cnt=0; // 当前s2个数
    let preLoop={}
    let inLoop={}
    while(true){
         // 再加一个s1个数
        s1Cnt++;
        for(let i=0;i<s1.length;i++){
            if(s2[index]===s1[i]){
                index++;
                if(index===s2.length){
                    // 找全了一个s2
                    index=0;
                    s2Cnt++;
                }
            }
        }
        if(s1Cnt===n1){
            // 没有找到循环节
            return Math.floor(s2Cnt/n2);
        }
        if(recall[index]){
            // 找到了循环节
            const {s1Cnt:s1Prime,s2Cnt:s2Prime}=recall[index]
            // 前s1cnt个s1包含了scnt个s2
            // 在出现循环节前有s1cnt个s1,
            // 匹配过scnt个s2
            preLoop={s1Prime,s2Prime}
            // 后面每s1prime个s1,会匹配s2prime个s2
            inLoop={
                s1Prime:s1Cnt-s1Prime,
                s2Prime:s2Cnt-s2Prime
            }
            break;
        }else{
            // 1个s1遍历结束时，对应的匹配到s2的位置的消耗的s1数量和匹配到的s2的数量
            recall[index]={
                s1Cnt,
                s2Cnt
            }
        }
    }

    let res=preLoop.s2Prime+Math.floor((n1- preLoop.s1Prime)/inLoop.s1Prime)*inLoop.s2Prime
    let rest=(n1- preLoop.s1Prime)%inLoop.s1Prime // 剩余多少个s1

    for(let i=0;i<rest;i++){
        for(let j=0;j<s1.length;j++){
            if(s1[j]===s2[index]){
                index++;
                if(index===s2.length){
                    res++;
                    index=0;
                }
            }
        }
    }
    return Math.floor(res/n2)
};
