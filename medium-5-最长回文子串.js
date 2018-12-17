/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = 0,
    start = 0,
    end = 0;
  let set = new Set();
  let str = "";
  while (start < s.length && end < s.length) {
    if (!set.has(s[end])) {
      set.add(s[end++]);
      const str2 = Array.from(set).join("");
      if (end - start >= max && isRev(str2)) {
        str = str2;
      }
    } else {
      set.delete(s[start++]);
    }
  }
  return str;
};
function isRev(s) {
  return (
    s
      .split("")
      .reverse()
      .join("") === s
  );
}
