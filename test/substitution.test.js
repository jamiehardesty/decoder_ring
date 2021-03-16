// Write your tests here!

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