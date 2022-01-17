// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
// Smallest Common Multiple
// kiszámítás
function smallestCommons(arr: [number, number]): number {
  const [from, to] = [Math.min(...arr), Math.max(...arr)];
  const numbers = [];
  for (let i = from; i <= to; ++i) {
    numbers.push(i);
  }
  let end = false;
  let candidate = to;
  while (!end) {
    if (numbers.every((i) => candidate % i == 0)) {
      end = true;
    } else {
      candidate += to;
    }
  }
  return candidate;
}

console.log(smallestCommons([23, 18]));
