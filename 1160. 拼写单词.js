/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result=0;
    words.forEach(word=>{
        let tmpChars=chars.split('')
        let i=0;
        for( i=0;i<word.length;i++){
            if(tmpChars.length===0) break
            const findIndex=tmpChars.indexOf(word[i])
            
            if(findIndex>-1){
                tmpChars=tmpChars.filter((_,i)=>i!==findIndex)
            }else{
                break;
            }
        }
        if(i===word.length){
            result+=word.length;
        }
    })
    return result
};

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map={}
    for(let i=0;i<chars.length;i++){
        let k=chars[i]
        if(map[k]!==undefined){
            map[k]++
        }else{
            map[k]=1
        }
    }

    let result=0;
    words.forEach(w=>{
        let i =0;
        let tpMap={}
        let t=true;
        for(i=0;i<w.length;i++){
            if(tpMap[w[i]]){
                tpMap[w[i]]++
            }else{
                tpMap[w[i]]=1
            }
        }
        for(let k in tpMap){
            if(map[k]&& tpMap[k]<=map[k]){

            }else{
                t=false
                break
            }
        }
        if(t){
            result+=w.length
        }
    })
    return result
};