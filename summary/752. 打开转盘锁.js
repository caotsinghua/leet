/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    const demap = {}
    deadends.forEach(s=>demap[s] = true)
    let deep =0
    let queue =['0000']
    let map = {}
    map['0000'] = true
    while(queue.length){
        let size = queue.length
        while(size--){
            let cur = queue.shift()
            
            if(cur == target){
                return deep
            }
            if(demap[cur]){
                continue
            }
           
            for(let i=0;i<4;i++){
                let a = add(cur,1,i)
                let b =add(cur,-1,i)
                if(!map[a]){
                    queue.push(a)
                    map[a] = true
                }
                if(!map[b]){
                    queue.push(b)
                    map[b] = true
                }
            }
        }
        deep++
    }
    return -1

}
function add(s, value, index) {
  s= s.split('')
  if(value ===1){
      if(s[index] == '9'){
          s[index] =0
      }else{
          s[index] = +s[index]+1
      }
  }else{
    if(s[index] == '0'){
        s[index] = 9
    }else{
        s[index] = s[index]-1
    } 
  }
  return s.join('')
}
