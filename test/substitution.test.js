const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution()", () => {
  it("decode: random text from the index, part 1", () => {
    const expected = "requires that the recipient have the substitution alphabet";
    const actual = substitution("lrgqilro fjnf fjr lrpixirsf jntr fjr oquofifqfids nexjnurf", "nupwrybjizheasdxglofqtckmv", false);
    expect(actual).to.eql(expected);
  });
  it("decode: random text from the index, part 2", () => {
    const actual = "from the standard alphabet will be transposed to the standard";
    const expected = substitution("jaro fnv hfukmuam uswnudvf gtss dv faukhwrhvm fr fnv hfukmuam", "udymvjqntibsokrweahfzxgpcl", false);
    expect(actual).to.equal(expected);
  });
  it('encode: text from the index', () => {
    const actual = "mxtyaial jp mssmudyud m npwyxmc mcwtmjan yunv m dsyl";
    const expected = substitution("achieved by arranging a typical alphabet into a grid", "mjxlardtybhceuvwzsgnqifkpo", true);;
    expect(actual).to.equal(expected);
  });
});

describe("Jimmie Faulkner Tests: Substitution", () => {
  it("should return false if alphabet isn't exactly 26 characters long", () => {
    let actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
  it("should encode the message properly", () => {
    let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    let expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should decode the message properly", () => {
    let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    let expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should ignore capitalization", () => {
    let testA = substitution("ThiNKFul", "xoyqmcgrukswaflnthdjpzibev");
    let testB = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(testA).to.equal(testB);
  });
  it("should maintain spaces in the message.", () => {
    let actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    let expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
});
