let map = [];
function fenpei(n, per) {
  let arr = [];
  for (let i = 0; i < n / per; i++) {
    let a = [];
    let c = 0;
    while (c < per) {
      if (put(a, Math.floor(Math.random() * n))) c++;
    }
    arr.push(a);
  }
  return arr;
}
function put(arr, v) {
  if (arr.indexOf(v) > -1 || map[v]) return false;
  arr.push(v);
  map[v] = true;
  return true;
}

console.log(fenpei(12, 3));
