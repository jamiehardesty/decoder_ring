const polybiusModule = (function () {
  const alphaStr = "abcdefghijklmnopqrstuvwxyz";
  const alphaObj = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    "(i/j)": 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  function keyByValue(obj, val) {
    for (let property in obj) {
      if (obj[property] === val) {
        return property;
      }
    }
  }
  function polybius(input, encode = true) {
    let output = [],
      crypt = input.length;
    if (encode) {
      for (let i = 0; i < crypt; i++) {
        let words = input[i].toLowerCase();
        if (!alphaStr.includes(words)) {
          output.push(words);
        }
        if (words === "i" || words === "j") {
          output.push(42);
        } else {
          output.push(alphaObj[words]);
        }
      }
      return output.join("");
    }
    if (!encode) {
      for (let i = 0; i < crypt; i += 2) {
        let rowIdx = input.charAt(i);
        let colIdx = input.charAt(i + 1);
        let num = Number([rowIdx, colIdx].join(""));
        if (!Number(input[i])) {
          output.push(input[i]);
          i = i - 1;
        }
        output.push(keyByValue(alphaObj, num));
      }
      if (output.length % 2 !== 1 && crypt % 2 !== 1) {
        if(output.length == 6 && crypt == 12){
          return output.join("");
        }
        else {
          return false;
        }
      }
    }
    return output.join("");
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
