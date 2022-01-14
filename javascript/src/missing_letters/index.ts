// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
// Missing letters

function fearNotLetter(str: string): string | undefined {
  let missingChar: string | undefined;
  for (let i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); ++i) {
    if (str.indexOf(String.fromCharCode(i)) < 0) {
      missingChar = String.fromCharCode(i);
      break;
    }
  }
  return missingChar;
}
console.log(fearNotLetter("abce"));
