// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
// Steamroller
function steamrollArray(arr: any): Array<any> {
  if (!Array.isArray(arr)) {
    return [arr];
  } else if (arr.length == 0) {
    return [];
  }
  const a = [];
  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr)) a?.push(...steamrollArray(arr[i]));
  }
  return a;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
