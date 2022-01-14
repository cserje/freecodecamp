// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
// DNA Pairing

function getPair(str: string): string {
  switch (str) {
    case "C":
      return "G";
    case "G":
      return "C";
    case "A":
      return "T";
    case "T":
      return "A";
    default:
      return "";
  }
}

function pairElement(str: string): Array<Array<string>> {
  return str.split("").map((s) => [s, getPair(s)]);
}

console.log(pairElement("GCG"));
