/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words=[];
    let str=s.trim()
    words=str.split(/\s+/)
    for(let i=0;i<Math.floor(words.length/2);i++){
        [words[i],words[words.length-i-1]]=[words[words.length-i-1],words[i]]
    }
    return words.join(' ')
};
