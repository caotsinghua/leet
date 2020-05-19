/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    for(let i=0,j=s.length-1;i<j;i++,j--){
        if(s[i]===s[j]){
            continue
        }
        // 不相等
        return judge(i+1,j)||judge(i,j-1)
    }

    function judge(start,end){
        for(let i=start,j=end;i<j;i++,j--){
            if(s[i]!==s[j]){
                return false
            }
        }
        return true
    }
    return true;
};
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"))
