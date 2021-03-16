// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // ? you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
  ////
  function caesar(input, shift, encode = true) {
    // ? It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
    if (!shift || shift === 0 || shift >= 25 || shift <= -25) {
      return false;
    }
    if (!encode) {
      shift *= -1;
    } //// shift = !encode *= -1
      return input
        .toLowerCase()  // ! no case sensitivity
        .split("")      // ! separates each letter
        .map((msg) => { // ! returns non-alpha characters
          if (!alphabet.includes(msg)) {
            return msg;
          }
          const eval = (alphabet.indexOf(msg) + shift) % 26;
          if (eval >= 0) { 
            return alphabet[eval];
          } else {  // TODO: ternary would be awesome.
            return alphabet[alphabet.length + eval];
          }         // ^ necessary 
        })
        .join("");
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
