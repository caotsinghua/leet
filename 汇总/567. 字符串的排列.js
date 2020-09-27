/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    const targetCount = {}
    for(let i=0;i<s1.length;i++){
        if(targetCount[s1[i]] == null){
            targetCount[s1[i]] = 1
        }else{
            targetCount[s1[i]]++
        }
    }

    let left =0, right =0
    let originMap = {}
    while(right < s1.length){
        let c = s2[right]
       
        if(originMap[c] == null){
            originMap[c] = 1
        }else{
            originMap[c]++
        }
        right++
    }
    // check
    while(right <= s2.length){
        // console.log(originMap)
        if(check()) return true
        originMap[s2[left]]--
        left++
        
        if(originMap[s2[right]] ==null){
            originMap[s2[right]] = 1
        }else{
            originMap[s2[right]]++
        }
        right++
    }

    function check(){
        for(let k in targetCount){
            if(targetCount[k] !== originMap[k]){
                return false
            }
        }
        return true
    }

    return false

};