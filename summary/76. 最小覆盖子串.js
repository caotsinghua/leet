/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left =0,right =0
    let minlen = s.length+1
    let res=''
    let temps=''

    let targetCount = {}
    let originCount = {}

    function has(){
        for(let k in targetCount){
            if(!originCount[k] || originCount[k] < targetCount[k]){
                return false
            }
        }
        return true
    }

    for(let k=0;k<t.length;k++){
        if(targetCount[t[k]] == null){
            targetCount[t[k]] =1
        }else {
            targetCount[t[k]]++
        }
    }

    while(right < s.length){
        let c = s[right]
        if(originCount[c] == null){
            originCount[c] = 1
        }else{
            originCount[c]++
        }
        right++
        // -- update
        // 如果窗口中不包含t，则继续右移动，否则开始缩小
        
        // need shrink
        // 缩小到窗口不包含t
        // console.log(originCount,has())
        
        while(has() && left <= right){
            let c2 = s[left]
            originCount[c2]--
            // console.log(temps,left,right,has(temps,t))
            if(right - left< minlen){
                minlen = right - left
                res = s.substring(left,right)
            }
            left++
        }
    }
    return res
};

