// Spinal Tap Case
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str: string) {
  // nagybetűknél elvágás
  // \W+ karaktereknél elvágás
  // 1. lépés: nagybetűk lecserélése -> kötőjel+kisbetűre
  return str
    .split("")
    .map((char) => {
      if (/[A-Z]/.test(char)) {
        return " " + char.toLowerCase();
      }
      return char;
    })
    .join("")
    .trim()
    .replace(/[\s\._]+/g, "-");
}

console.log(spinalCase("This Is Spinal Tap"));
