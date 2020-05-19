/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let left=[]
    let right=[]
    let res=0
    ratings.forEach((_,i)=>{
        left[i]=1;
        right[i]=1
    })
    for(let i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]){
            left[i]=left[i-1]+1
        }
    }
    for(let i=ratings.length-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]){
            right[i]=right[i+1]+1
        }
       

    }
    for(let i=0;i<ratings.length;i++){
        res+=Math.max(left[i],right[i])
    }
    return res
};