/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let prevFindIndex=-1;
    for(let i=0;i<s.length;i++){
        if(!find(s[i])){
            return false
        }
    }
    function find(w){
        for(let i=prevFindIndex+1;i<t.length;i++){
            if(t[i]===w) {
                prevFindIndex=i;
                return true
            }
        }
        return false
    }
    return true;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let map={}
    for(let i=0;i<t.length;i++){
        if(map[t[i]]){
            map[t[i]].push(i)
        }else{
            map[t[i]]=[i]
        }
    }
    // 匹配
    let lastIndex=-1;
    for(let i=0;i<s.length;i++){
        let indexes=map[s[i]]
        if(!indexes) return false;
        // 存在这个字符，检查顺序是否正确
        let low=0;
        let high=indexes.length-1;
        while(low<high){
            let mid=Math.floor((low+high)/2);
            let findIndex=indexes[mid]
            // 要找比lastindex大的
            if(findIndex > lastIndex){
                high=mid;
            }else{
                low=mid+1
            }
        }

        if(indexes[high]<=lastIndex){
            return false
        }
        lastIndex=indexes[high]
    }
    return true
};
