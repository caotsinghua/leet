/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    const map=new Map()
    // 有k个鸡蛋，还有n层
    function find(k,n){
        if(k===1) return n;
        if(n===0) return 0
        const key=`${k}-${n}`
        if(map.has(key)) return map.get(key)
        let res=n;
        // 从第i层扔，楼层几次就几次
        // for(let i=1;i<=n;i++){
        //     // 碎了/不碎，选择哪个方向
        //     // 如果碎了，说明f在i层以下，如果没碎，说明在i+1到n之间,需要测试n-i层
        //     let findInI=Math.max(find(k-1,i-1),find(k,n-i))+1
        //     res=Math.min(res,findInI)
        //     map.set(key,res)
        // }
        // 二分
        let low=1
        let high=n
        while(low<=high){
            let mid=Math.floor((low+high)/2)
            let broke=find(k-1,mid-1)
            let noBroke=find(k,n-mid);
            if(broke>noBroke){
                res=Math.min(res,broke+1)
                high=mid-1;
            }else{
                res=Math.min(res,noBroke+1)
                low=mid+1;
            }
            map.set(key,res)
        }
        return res;
    }
    return find(K,N)

};
