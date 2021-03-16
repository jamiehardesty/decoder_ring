// Write your tests here!

const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius()", () => {
  it("decode a classic coding phrase (''hello world'')", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.eql(expected);
  });
  it("encode: bootcamps are fun", () => {
    const actual = "214343443111235334 112451 125433";
    const expected = polybius("bootcamps are fun", true);
    expect(actual).to.equal(expected);
  });
  it('encode: this is a test', () => {
    const actual = "44324234 4234 11 44513444";
    const expected = polybius("this is a test", true);;
    expect(actual).to.equal(expected);
  });
});

// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false
