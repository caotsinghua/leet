/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  let a = 0,
    b = 0,
    c = 0,
    d = 0;
  d = num % 10;
  c = Math.floor((num - d) / 10) % 10;
  b = Math.floor((num - c) / 100) % 10;
  a = Math.floor((num - b) / 1000) % 10;
  let res_a = "",
    res_b = "",
    res_c = "",
    res_d = "";
  for (let i = 1; i <= a; i++) {
    res_a = `${res_a}M`;
  }
  for (let i = 1; i <= b; i++) {
    let cur = i * 100;
    if (cur == 400 || cur == 900) {
      res_b = `${map[100]}${map[cur + 100]}`;
    } else if (map[cur]) {
      res_b = map[cur];
    } else {
      res_b = `${res_b}C`;
    }
  }
  for (let i = 1; i <= c; i++) {
    let cur = i * 10;
    if (cur == 40 || cur == 90) {
      res_c = `${map[10]}${map[cur + 10]}`;
    } else if (map[cur]) {
      res_c = map[cur];
    } else {
      res_c = `${res_c}X`;
    }
  }
  for (let i = 1; i <= d; i++) {
    let cur = i;
    if (cur == 4 || cur == 9) {
      res_d = `${map[1]}${map[cur + 1]}`;
    } else if (map[cur]) {
      res_d = map[cur];
    } else {
      res_d = `${res_d}I`;
    }
  }
  console.log(res_a, res_b, res_c, res_d);
  return `${res_a}${res_b}${res_c}${res_d}`;
};
