/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  let n2 = n * 2;
  let c = cheng(n + 1, n2) / cheng(1, n);
  return c / (n + 1);
};
// m<n
const cheng = (m, n) => {
  let res = 1;
  for (let i = m; i <= n; i++) {
    res *= i;
  }
  return res;
};
