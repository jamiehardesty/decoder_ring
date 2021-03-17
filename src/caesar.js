const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift >= 25 || shift <= -25) {
      return false;
    }
    if (!encode) {
      shift *= -1;
    } 
      return input
        .toLowerCase()
        .split("") 
        .map((msg) => {
          if (!alphabet.includes(msg)) {
            return msg;
          }
          const eval = (alphabet.indexOf(msg) + shift) % 26;
          if (eval >= 0) { 
            return alphabet[eval];
          } else { 
            return alphabet[alphabet.length + eval];
          }
        })
        .join("");
  }
  return {
    caesar,
  };
})();
module.exports = caesarModule.caesar;
