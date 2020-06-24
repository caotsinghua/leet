/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  if (pattern === value) return true

  let ca = 0,
    cb = 0
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "a") {
      ca++
    } else {
      cb++
    }
  }

  if (!pattern) return false
  if (!value) {
    return ca === 0 || cb === 0
  }

  const lv = value.length
  let maxA='a'
  if (ca < cb) {
    ;[ca, cb] = [cb, ca]
    maxA='b'
  }

//   console.log({ ca, cb })

  for (let la = 0; la <= lv / ca; la++) {
    let lb = (lv - la * ca) / cb
    // console.log(la, lb)
    let astr = ""
    let bstr = ""

    let strStart = 0
    let success = true

    for (let pos = 0; pos < pattern.length; pos++) {
      const ch = pattern[pos]

      if (ch === maxA) {
        let ct = 0
        let tmp = ""
        while (ct < la) {
          tmp += value[strStart++]
          ct++
        }
        if (!astr) {
          astr = tmp
        } else if (astr !== tmp) {
          success = false
          break
        }
      } else {
        let ct = 0
        let tmp = ""
        // console.log(strStart,"走到b")
        while (ct < lb) {
          tmp += value[strStart++]
          ct++
        }
        if (!bstr) {
        //   console.log("bstr 不在")
          bstr = tmp
        } else if (bstr !== tmp) {
        //   console.log("false ? ", bstr, tmp)
          success = false
          break
        }
      }
    }
    // console.log(success, astr, bstr)
    if (success && astr !== bstr) {
      return true
    }
  }

  //   if (ca > 0 && cb > 0) {

  //   } else {
  //     // ca === 0
  //     let lb = lv / pattern.length
  //     if (!Number.isInteger(lb)) {
  //       return false
  //     }
  //     let bstr = ""
  //     let tmp = ""
  //     for (let i = 0; i < value.length; i++) {
  //       tmp += value[i]
  //       if ((i + 1) % lb === 0) {
  //         if (bstr) {
  //           if (bstr !== tmp) {
  //             return false
  //           }
  //         } else {
  //           bstr = tmp
  //         }
  //         tmp = ""
  //       }
  //     }
  //   }

  return false
}
