export function palindrome(str: string): boolean {
  str = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  const half = Math.floor(str.length / 2);
  return str.slice(0,half) == str.slice(-half).split("").reverse().join("");
}
