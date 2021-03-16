// Write your tests here!

const { expect } = require("chai");
const caesar = require("../src/caesar");

// describe("caesarModule", () => {
describe("caesar()", () => {
  it("should encode a message with the shift value", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.eql(expected);
  });
  it("should successfully decode secret messages", () => {
    const actual = "this is a secret message!";
    const expected = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
  it('input ("Zebra Magazine", 3) should return "cheud pdjdclqh"', () => {
    const actual = "cheud pdjdclqh";
    const expected = caesar("Zebra Magazine", 3);
    expect(actual).to.equal(expected);
  });
});
// });
