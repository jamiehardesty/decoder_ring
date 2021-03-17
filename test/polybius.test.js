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

describe("Jimmie Faulkner Tests: Polybius", () => {
  it("should encode the input", () => {
    let expected = "4432423352125413";
    let actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should decode the input", () => {
    let expected = "th(i/j)nkful";
    let actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces throughout", () => {
    let expected = "3251131343 2543241341";
    let actual = polybius("Hello world");
    expect(actual).to.equal(expected);
  });
  it("should return a string", () => {
    let actual = polybius("thinkful");
    expect(actual).to.be.a("string");
  });
  it("should translate the letters i and j to 42 when encoding", () => {
    let expected = "4242";
    let actual = polybius("ij");
    expect(actual).to.equal(expected);
  });
  it("should translate  42 to (i/j) when decoding", () => {
    let expected = "(i/j)";
    let actual = polybius("42", false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters when encoding", () => {
    let testA = polybius("Hello world");
    let testB = polybius("hELLo woRLd");
    expect(testA).to.equal(testB);
  });
});