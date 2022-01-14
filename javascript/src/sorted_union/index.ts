// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
// Sorted Union

function uniteUnique(...arr: Array<Array<number>>) {
  const mySet = new Set<number>();
  arr.forEach((a: number[]) => {
    a.forEach((i: number) => {
      if (!mySet.has(i)) {
        mySet.add(i);
      }
    });
  });
  return Array.from(mySet);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
