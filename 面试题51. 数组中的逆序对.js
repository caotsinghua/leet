/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    if(nums.length<=1) return 0;
    const sorted=nums.slice()
    let res=0; // 个数
    function split(left,right){
        if(left === right) return
        let mid=(left+right)>>1;
        split(left,mid)
        split(mid+1,right)
        count(left,mid,mid+1,right)
    }
    function count(lStart,lEnd,rStart,rEnd){
        let i=lStart;
        let j=rStart;
        let tmp=[]
        while(i<=lEnd && j <=rEnd){
            if(sorted[i]<=sorted[j]){
                tmp.push(sorted[i++])
            }else{
                tmp.push(sorted[j++])
                // left > right
                res+=lEnd-i+1;
            }
        }
        while(i<=lEnd){
            tmp.push(sorted[i++])
        }
        while(j<=rEnd){
            tmp.push(sorted[j++])
        }
        for(let k=0;k<tmp.length;k++){
            sorted[lStart+k]=tmp[k]
        }
    }
    split(0,nums.length-1);
    return res;
};



// const arr=[5,4,7,9,3,8,2,1]
// function guibing(array){
//     const res=array.slice();
//     function sp(start,end){
//         if(start===end){
//             return; // 切分到单个元素，开始回溯合并
//         }
//         let mid=Math.floor((start+end)/2);
//         let leftPart=sp(start,mid)
//         let rightPart=sp(mid+1,end);
//         sort(start,mid,mid+1,end); // 合并两个数组
//     }
//     function sort(lStart,lEnd,rStart,rEnd){
//         // console.log(lStart,lEnd,rStart,rEnd,leftArray,rightArray)
//         const tmp=[];
//         let i=lStart;
//         let j=rStart;
//         while(i<=lEnd && j<=rEnd){
//             if(res[i]<=res[j]){
//                 tmp.push(res[i++])

//             }else{
//                 tmp.push(res[j++])

//             }
//         }

//         while(i<=lEnd){
//             tmp.push(res[i++])
//         }
//         while(j<=rEnd){
//             tmp.push(res[j++])
//         }

//         // 合并到目标数组中
//         for(let s=0;s<tmp.length;s++){
//             res[s+lStart]=tmp[s];
//         }
//     }

//     sp(0,array.length-1);
//     return res;
// }
// console.log(guibing(arr))

