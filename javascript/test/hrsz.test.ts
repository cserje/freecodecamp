import { expect } from "chai";
import { checkHrszRegex } from "../src/helyrajzi_szam";

describe("Helyrajzi szám regex(p) ellenőrzése", () => {
  it("üres bemenetre az elvárt visszatérési típus boolean", () => {
    expect(checkHrszRegex("")).to.be.a("boolean");
  });
  it("üres bemenetre az elvárt érték false", () => {
    expect(checkHrszRegex("")).to.equals(false);
  });
  it('"0" bemenetre az elvárt érték false', () => {
    expect(checkHrszRegex("0")).to.equals(false);
  });
  it('"01" bemenetre az elvárt érték true', () => {
    expect(checkHrszRegex("01")).to.equals(true);
  });
  it('"1" bemenetre az elvárt érték true', () => {
    expect(checkHrszRegex("1")).to.equals(true);
  });
  it('"0345" bemenetre az elvárt érték true', () => {
    expect(checkHrszRegex("0345")).to.equals(true);
  });
  it('"1/A" bemenetre az elvárt érték false', () => {
    expect(checkHrszRegex("1/A")).to.equals(false);
  });
  it('"1/2" bemenetre az elvárt érték true', () => {
    expect(checkHrszRegex("1/2")).to.equals(true);
  });
  it('"1245/B" bemenetre az elvárt érték true', () => {
    expect(checkHrszRegex("1245/B")).to.equals(true);
  });
  it('"1245/B/1" bemenetre az elvárt érték true', () => {
    expect(checkHrszRegex("1245/B/1")).to.equals(true);
  });
});
