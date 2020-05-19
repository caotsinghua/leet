/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // x2 > x1
    const [x1,y1,x2,y2]=rec1;
    const [x11,y11,x22,y22]=rec2;
    if(x2<=x11) return false
    if(x1>=x22) return false
    if(y1>=y22) return false
    if(y2<=y11) return false
    return true


    


};