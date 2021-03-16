// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // ? you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || alphabet.includes("abc")) {
      return false;
    }
    let standard = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    let encrypt = input.split("").map((letter) => standard.indexOf(letter));
    let decrypt = input.split("").map((letter) => alphabet.indexOf(letter));
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
      for (let idx in decrypt) {
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
    // console.log("input: "+ input);
    // console.log("sub cipher: "+alphabet);
    // console.log("encrypt: "+encrypt);
    // console.log("decrypt: "+decrypt);
module.exports = substitutionModule.substitution;
