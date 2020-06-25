/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let i=0
    let j=numbers.length-1
    while(i<j){
        let mid=Math.floor((i+j)/2)
        if(numbers[mid] > numbers[j]){
            // 说明最小值在mid左边
            i=mid+1
        }else if(numbers[mid] < numbers[j]){
            j=mid
        }else{
            // 相等
            j--
        }
    }
    return numbers[i]
};