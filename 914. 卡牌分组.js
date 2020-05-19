/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const source=deck;
    source.sort();
    let count=0;
    for(let k=1;k<deck.length;k++){
        let i=0;
        for(i=0;i<source.length;i++){
            let m=k;
            while(--m){
                if(source[i+m]!==source[i]){
                    break;
                }
                i++;
            }
            if(m!==0){
                break;
            }
        }
        if(i===source.length){
            count++;
            
        }
        if(count>=2) return true;

    }
    return false;
};

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let nums=[];
    deck.forEach((n)=>{
        if(nums[n]){
            nums[n]++
        }else{
            nums[n]=1
        }
    })
    nums=nums.filter(i=>!!i)

    function gcd(a,b){
        if(b===0) return a;
        return gcd(b,a%b);
    }
    let b=nums.reduce((a,b)=>{
        return gcd(a,b)
    },nums[0])
    if(b>=2) return true;
    return false;
};