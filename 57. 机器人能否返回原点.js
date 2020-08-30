/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const map = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, 1],
    D: [0, -1],
  }
  let origin = [0, 0]
  for(let i=0;i<moves.length;i++){
      const [dx,dy]=map[moves[i]]
      origin[0]+=dx
      origin[1]+=dy
  }
  
  return origin[0] === origin[1] && origin[0] === 0
}
