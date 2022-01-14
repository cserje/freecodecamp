// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
// Search and Replace

declare interface String {
  matchCase(matchWith: string): string;
}

String.prototype.matchCase = function (matchWith: string): string {
  if (matchWith[0].toLowerCase() == matchWith[0]) {
    return this.slice(0, 1).toLowerCase() + this.slice(1);
  } else {
    return this.slice(0, 1).toUpperCase() + this.slice(1);
  }
};

function myReplace(str: string, before: string, after: string) {
  return str.replace(before, after.matchCase(before));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
