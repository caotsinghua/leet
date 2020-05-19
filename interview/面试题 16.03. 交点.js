/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function(start1, end1, start2, end2) {
    const [l1x1,l1y1]=start1;
    const [l1x2,l1y2]=end1
    const [l2x1,l2y1]=start2
    const [l2x2,l2y2]=end2
    let k1=getK(start1,end1);
    let b1=getB(k1,start1);
    let k2=getK(start2,end2);
    let b2=getB(k2,start2);

    console.log(k1,b1)
    console.log(k2,b2)
    let minx1=Math.min(l1x1,l1x2) // l1中最开始的点
    let maxx1=Math.max(l1x1,l1x2); // l1结束点

    let minx2=Math.min(l2x1,l2x2);
    let maxx2=Math.max(l2x1,l2x2); // l2中结束的点
    if(k1===Infinity && k2!==Infinity){
        // 第一条是直线
        // 检查焦点
        let mx=l1x1;
        let my=k2*mx+b2;
        // 检查该点是否在l2中
        if(mx>=minx2 && mx<= maxx2){
            return [mx,my]
        }else{
            return []
        }
    }else if(k1!==Infinity && k2===Infinity){
        // 第二条是直线
        let mx=l2x1;
        let my=k1*mx+b1;
        // 检查该点是否在l1中
        if(mx>=minx1 && mx<= maxx2){
            return [mx,my]
        }else{
            return []
        }
    }else if (k1===Infinity && k2===Infinity){
        // 两条都是直线，如果相交，找一个y最小的
        let minl1y=Math.min(l1y1,l1y2)
        let maxl1y=Math.max(l1y1,l1y2)
        let minl2y=Math.min(l2y1,l2y2)
        let maxl2y=Math.max(l2y1,l2y2)

        if(l1x1!==l2x1) return [] // 不香蕉
        if(maxl1y<minl2y || minl1y> maxl2y) return []
        return [l1x1,Math.max(minl1y,minl2y)]

    }
    // 两条斜线
    if(k1===k2&&b1===b2){
        console.log(minx1,maxx1,minx2,maxx2)
        if (minx1>maxx2 || maxx1<minx2 ) return []
        // 如果重合，找一个x最小的点
        let minx=Math.max(minx1,minx2)
        let miny=k1*minx+b1;
        return [minx,miny]
    }else{
        // 如果不同，找焦点
        let mx=(b2-b1)/(k1-k2);
        let my=k1*mx+b1; // 重叠的点
        if(mx>=minx1&&mx<=maxx1 && mx>=minx2 && mx<=maxx2){
            // 有这个点
            return [mx,my]
        }else{
            // 不相交
            return []
        }
    }

};

function getK(start,end){
    let [x1,y1]=start;
    let [x2,y2]=end;
    if(x1-x2===0){
        // 一条直线
        return Infinity;
    }
    return (y1-y2)/(x1-x2)
}
function getB(k,start){
    if(k===Infinity) return 0;
    let [x1,y1]=start;
    return y1-k*x1;
}
