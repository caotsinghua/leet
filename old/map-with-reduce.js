function map(array, callback) {
  return array.reduce((target, cur) => {
    return [...target, callback(cur)];
  }, []);
}
const mapped = map([1, 2, 3], item => {
  return `<<${item}>>`;
});
console.log(mapped);
