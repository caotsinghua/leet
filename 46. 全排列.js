// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function(nums) {

//     function loop(array){
//         if(array.length==1) return [array];
//         const res=[];
//         for(let i=0;i<array.length;i++){
//             let temp=[];
//             const left=array.filter((_,id)=>id!==i)
//             const loopleft=loop(left);
//             if(loopleft.length >1){
//                 for(let j=0;j<loopleft.length;j++){
//                     temp=[array[i],...loopleft[j]]
//                     res.push(temp);
//                 }
//             }else{
//                 temp=[array[i],...loopleft]
//                 res.push(temp);
//             }

//         }
//         return res;
//     }
//     return loop(nums)
//     // return res
// };



var permute = function(nums) {
    const res=[];
    const used=[];
    const len=nums.length;
    function loop(depth,path){
        if(depth === len ) {
            res.push([...path]);
        }
        for(let i=0;i<nums.length;i++){
            if(!used[nums[i]]){
                path.push(nums[i])
                used[nums[i]]=true;
                loop(depth+1,path)
                used[nums[i]]=false;
                path.pop();
            }
        }
    }
    loop(0,[]);
    return res;
}
console.log(permute([1,2,3]))
