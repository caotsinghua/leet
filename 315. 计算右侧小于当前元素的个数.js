/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const result = []
  nums.forEach((cur, index) => {
    let c = 0
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] < cur) {
        c++
      }
    }
    result[index] = c
  })
  return result
}

//
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const map = {}
  nums.forEach((n) => {
    map[n] = 0
  })
  const index = Object.keys(map).sort((a, b) => a - b) // 原值排序
  index.forEach((n, i) => {
    map[n] = i // 映射数组的值在桶中的位置
  })
  const tong=Array(index.length).fill(0)
//   console.log(index)
//   console.log(map)
//   console.log(tong)
  function lowBit(i) {
    return i & -i
  }
  // 获取前缀和
  function query(i) {
    let ret = 0
    while (i > 0) {
      ret += tong[i]
      i -= lowBit(i)
    //   console.log(i)
    }
    return ret
  }

  function update(i) {
    while (i < tong.length) {
      tong[i]++
    //   console.log(i,lowBit(i))
      i += lowBit(i)
    }
  }

  const result = []
  for (let i = nums.length - 1; i >= 0; i--) {
    let cur = nums[i]
    result[i] = query(map[cur]) // 前缀和
    
    update(map[cur]+1)
  }
  return result
}


var countSmaller = function (nums) {
    const map = {}
    nums.forEach((n) => {
      map[n] = 0
    })
    const index = Object.keys(map).sort((a, b) => a - b) // 原值排序
    index.forEach((n, i) => {
      map[n] = i // 映射数组的值在桶中的位置
    })
    const tong=Array(index.length).fill(0)
  //   console.log(index)
  //   console.log(map)
  //   console.log(tong)
    function lowBit(i) {
      return i & -i
    }
    // 获取前缀和
    function query(i) {
      let ret = 0
      i-=1
      while (i >= 0) {
        ret += tong[i]
        i -= 1
      //   console.log(i)
      }
      return ret
    }
  
    function update(i) {
      if(i>0){
          tong[i-1]++
      }
    }
  
    const result = []
    for (let i = nums.length - 1; i >= 0; i--) {
      let cur = nums[i]
      result[i] = query(map[cur]) // 前缀和
      update(map[cur]+1)
    //   console.log(map[cur],tong,index,result[i])
    }
    return result
  }
  