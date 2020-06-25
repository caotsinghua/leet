/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let left = 1
  let right = 2
  const res = []
  //   当right到达target/2+1位置，前面的全部失效
  while (left < right) {
    const sum = ((left + right) * (right - left + 1)) / 2
    if (sum > target) {
      // 偏大
      left++
    } else if (sum < target) {
      right++
    } else {
      // -=
      let tp = []
      for (let i = left; i <= right; i++) {
        tp.push(i)
      }
      res.push(tp)
      left++
    }
  }
  return res
}
// 数学方法
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  // (x+y)(y-x+1)/2 = target
  // y2+y-x2+x-2*target = 0
  //
  const limit = Math.floor(target / 2)
  const res=[]
  for(let x=1;x<=limit;x++){
      const c=-x*x+x-2*target
      const b=1
      const a=1
      let delta=1-4*c
      if(delta < 0) continue; // 无解
      let sqrtDelta=Math.round(Math.sqrt(delta))
      if(sqrtDelta*sqrtDelta===delta && (-1+sqrtDelta)%2===0){
        //   (-b+根号 b2-4ac)/2 是整数
        const y=Math.round((sqrtDelta-1)/2)
        let tp=[]
        for(let i=x;i<=y;i++){
            tp.push(i)
        }
        res.push(tp)
      }

  }
  return res
}
