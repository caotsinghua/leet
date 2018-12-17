/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  return isMaxOrMin(toNum(str));
};

function toNum(str) {
  let res = "";
  let cur = 0;
  let negative = "";
  // 去除空格
  let strTrim = str.trim();
  //   去除正负号
  if (strTrim[0] === "-") {
    negative = "-";
    strTrim = strTrim.substring(1);
  } else if (strTrim[0] === "+") {
    strTrim = strTrim.substring(1);
  }
  while (isNum(strTrim[cur])) {
    res += strTrim[cur++];
  }
  res = res.replace(/^0+/, "");
  return !res ? res : negative + res;
}

function isNum(str) {
  if (/[\d]/.test(str)) return true;
  return false;
}

function isMaxOrMin(str) {
  if (!str) return 0;
  const max = "2147483647";
  const min = "-2147483648";
  const isNegative = str[0] === "-";
  if (isNegative) {
    if (str.length > min.length) return min;
    if (str.length < min.length) return str;
    for (let i = 1; i < min.length; i++) {
      if (str[i] > min[i]) {
        if (str.substring(0, i + 1) > min.substring(0, i + 1)) return min;
      }
    }
  } else {
    if (str.length > max.length) return max;
    if (str.length < max.length) return str;
    for (let i = 0; i < max.length; i++) {
      if (str[i] > max[i]) {
        if (str.substring(0, i + 1) > max.substring(0, i + 1)) return max;
      }
    }
  }
  return str;
}
