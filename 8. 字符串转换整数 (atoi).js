/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num='';
    let i=0;
    const MAX_INT=Math.pow(2,31)-1;
    const MIN_INT=-(MAX_INT+1)
    while(str[i]===' '){
        i++;
    }
    let sign=1;
   
    if(str[i]==='+'){
        i++;
    }else if(str[i]==='-'){
        i++;
        sign=-1;
    }

    while(/\d/.test(str[i])){
        num+=str[i++]
    }
    // 去除空格完毕
    i=0;
    while(num[i]==0){
        i++;
    }
    num=num.substr(i)
    // 去除0完毕
    if(num.length===0) return 0;
    if(num.length>10){
        return sign>0?MAX_INT:MIN_INT
    }
    if(sign>0){
        if(+num > MAX_INT){
            return MAX_INT
        }else{
            return num
        }
    }else{
        if(+num>MAX_INT+1){
            return MIN_INT
        }else{
            return -num;
        }
    }

};