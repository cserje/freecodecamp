// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
// Sum All Odd Fibonacci Numbers

function sumFibs(num = 0) {
  if (num < 1) {
    return 0;
  }
  let sum = 1;
  function _(lower = 1, greater = 1, limit = num) {
    if (greater > limit) {
      return;
    }
    if (greater % 2 == 1) {
      sum += greater;
    }
    if (greater == limit) {
      return;
    }
    _(greater, lower + greater);
  }
  _();
  return sum;
}

console.log(sumFibs(4));
