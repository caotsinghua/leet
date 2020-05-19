/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    let len1=str1.length;
    let len2=str2.length;
    let len=len1<len2?len1:len2;
    function isMul(s,n,ts){
        let p='';
        for(let i=0;i<n;i++){
            p+=s;
        }
        return p===ts
    }
    for(let i=len;i>=1;i--){
        if(len1%i==0&&len2%i==0){
            let s1=len1/i;
            let s2=len2/i;
            let s=str1.substr(0,i)
            if(isMul(s,s1,str1)&&isMul(s,s2,str2)){
                return s;
            }
        }
        
    }
    return ''

};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    let len1=str1.length;
    let len2=str2.length;
    let len=len1<len2?len1:len2;
    function isMul(s,n,ts){
        let p='';
        for(let i=0;i<n;i++){
            p+=s;
        }
        return p===ts
    }
    for(let i=len;i>=1;i--){
        if(len1%i==0&&len2%i==0){
            let s1=len1/i;
            let s2=len2/i;
            let s=str1.substr(0,i)
            if(isMul(s,s1,str1)&&isMul(s,s2,str2)){
                return s;
            }
        }
        
    }
    return ''

};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    function gcd(a,b){
        let c=a%b;
        if(c===0) return b;
        return gcd(b,a%b)
    }
    let glen=gcd(str1.length,str2.length);
    let t1=str1.length/glen;
    let t2=str2.length/glen;
    let s=str1.substr(0,glen)
    let ts1=''
    let ts2=''
    for(let i=0;i<t1;i++){
        ts1+=s;
    }
    for(let i=0;i<t2;i++){
        ts2+=s;
    }
    return ts1===str1&&ts2===str2?s:'';

};