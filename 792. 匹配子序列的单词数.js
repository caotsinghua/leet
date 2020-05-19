/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    let res=0
    for(let i=0;i<words.length;i++){
        let word=words[i]
        let a=0;
        let has=false
        for(let j=0;j<S.length;j++){
            if(word[a]===S[j]){
                a++;
            }
            if(a===word.length){
                has=true
                break
            }
        }
        if(has){
            res++
        }
    }
    return res;
};
