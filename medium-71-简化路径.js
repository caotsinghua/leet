/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const arr = path.split("/");
  const res = [];
  arr.forEach(item => {
    if (item == "..") {
      res.pop();
    } else if (item && item !== ".") {
      res.push(item);
    }
  });
  let resStr = "";
  res.forEach(path => {
    resStr = `${resStr}/${path}`;
  });
  return resStr ? resStr : "/";
};
