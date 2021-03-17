const substitutionModule = (function () { 
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || alphabet.includes("abc")) {
      return false;
    }
    const standard = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    const encrypt = input.split("").map((letter) => standard.indexOf(letter));
    const decrypt = input.split("").map((letter) => alphabet.indexOf(letter));
    if (encode) {
      for (let idx in encrypt) {
        if (encrypt[idx] === -1) {
          output += " ";
        } else {
          output += alphabet[encrypt[idx]];
        }
      }
      return output;
    }
    if (!encode) {
      for (const idx in decrypt) {
        if (decrypt[idx] === -1) {
          output += " ";
        } else {
          output += standard[decrypt[idx]];
        }
      }
      return output;
    }
  }
  return {
    substitution,
  };
})();
module.exports = substitutionModule.substitution;
