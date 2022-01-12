import { expect } from "chai";
import { palindrome } from "../src/palindrome_checker";

describe("Palindrome Checker", () => {
  it('palindrome("eye") should return a boolean.', () => {
    expect(palindrome("eye")).to.be.a("boolean");
  });
  it('palindrome("eye") should return true.', () => {
    expect(palindrome("eye")).to.equal(true);
  });
  it('palindrome("_eye") should return true.', () => {
    expect(palindrome("_eye")).to.equal(true);
  });
  it('palindrome("race car") should return true.', () => {
    expect(palindrome("race car")).to.equal(true);
  });
  it('palindrome("not a palindrome") should return false.', () => {
    expect(palindrome("not a palindrome")).to.equal(false);
  });
  it('palindrome("A man, a plan, a canal. Panama") should return true.', () => {
    expect(palindrome("A man, a plan, a canal. Panama")).to.equal(true);
  });
  it('palindrome("never odd or even") should return true.', () => {
    expect(palindrome("never odd or even")).to.equal(true);
  });
  it('palindrome("nope") should return false.', () => {
    expect(palindrome("nope")).to.equal(false);
  });
  it('palindrome("almostomla") should return false.', () => {
    expect(palindrome("almostomla")).to.equal(false);
  });
  it('palindrome("My age is 0, 0 si ega ym.") should return true.', () => {
    expect(palindrome("My age is 0, 0 si ega ym.")).to.equal(true);
  });
  it('palindrome("1 eye for of 1 eye.") should return false.', () => {
    expect(palindrome("1 eye for of 1 eye.")).to.equal(false);
  });
  it('palindrome("0_0 (: /-\\ :) 0-0") should return true.', () => {
    expect(palindrome("0_0 (: /-\\ :) 0-0")).to.equal(true);
  });
  it('palindrome("five|\\_/|four") should return false.', () => {
    expect(palindrome("five|\\_/|four")).to.equal(false);
  });
});
