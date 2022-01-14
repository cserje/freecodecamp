// freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
// Pig Latin

function translatePigLatin(str: string) {
  const consonantRegExp = /^[bcdfghjklmnpqrstvwxyz]+/;
  if (consonantRegExp.test(str)) {
    const cluster = str.match(consonantRegExp)![0];
    return str.slice(cluster.length) + cluster + "ay";
  } else {
    return str + "way";
  }
}

console.log(translatePigLatin("schwartz"));

