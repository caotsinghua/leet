/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const nStack=[]
    const sStack=[]
    let res='';
    let temp='';
    let numTemp=''
    for(let i=0;i<s.length;i++){
        let ch=s[i];
        if(Number.isInteger(ch-0)){
            numTemp+=ch;
            if(temp){
                if(nStack.length > sStack.length){
                    sStack.push(temp);
                }else{
                    res+=temp;
                }
                
            }
            temp='';
        }else if(ch==='['){
            // start get str
            if(numTemp){
                nStack.push(numTemp-0)
            }
            temp='';
            numTemp='';
        }else if(ch===']'){
            if(temp){
                sStack.push(temp)
            }
            temp='';
            // console.log(nStack,sStack)
            let times=nStack.pop();
            let str=sStack.pop();
            let ts='';
            while(times--){
                ts+=str;
            }
            
            if(sStack.length){
                let p=sStack.pop()
                sStack.push(p+ts);
            }else{
                res+=ts;
            }
        }else{
            temp+=ch;
        }
    }

    return res+temp;
};




/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const nStack=[]
    const sStack=[]
    let res='';
    let numTemp=''
    for(let i=0;i<s.length;i++){
        let ch=s[i];
        if(Number.isInteger(ch-0)){
            numTemp+=ch;
        }else if(ch!==']'){
            if(numTemp){
                nStack.push(numTemp-0)
                numTemp=''
            }
            sStack.push(ch);
        }else{
            // ]
            let num=nStack.pop();
            let tpop=''
            let temp=''
            // console.log(sStack)
            while((tpop=sStack.pop())!=='['){
                temp=tpop+temp;
            }
            // console.log(temp)
            let ts=''
            while(num--){
                ts+=temp;
            }
            sStack.push(ts);
        }
    }
    
    return sStack.join('')

    
};

console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("asd3[a2[c]]asd"))
console.log(decodeString("3[a]asd2[bc]bbb"))
console.log(decodeString("100[leetcode]"))
console.log(decodeString("3[a]2[b4[F]c]")) 