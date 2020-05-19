/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set=new Set(nums)
    return (Array.from(set).reduce((a,b)=>a+b,0)*3 - nums.reduce((a,b)=>a+b))/2

};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let one=two=0;
    nums.forEach(n=>{
        // two=0时，~row=1111 1111,即返回n^one
        one= ~two & (n^one)
        two=~one & (n^two)
        // 如果出现1次 one=n ，two=0
        // 2次，one=0，two=n
        // 3次，one=0，two=0

    })
    return one
};
// 260. 只出现一次的数字 III
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // 先找两个元素位数不一样的值t
    // 找到第一个位数不一样的地方，区分两个数到两个数组
    // 对两个数组分别进行亦或
    let t=nums.reduce((a,b)=>a^b,0)
    let diff=1;
    while(!(t&diff)){
        diff=diff<<1;
    }
    let n1=nums.filter(n=>n&diff).reduce((a,b)=>a^b,0)
    let n2=nums.filter(n=>!(n&diff)).reduce((a,b)=>a^b,0)
    return [n1,n2]
};
