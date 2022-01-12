export function telephoneCheck(str: string): boolean {
  const allowedCharacters = /^[\d\-\(\)\s]{10,20}$/;
  // nem megengedett karakterek kizárása
  if (!allowedCharacters.test(str)) {
    return false;
  }
  // zárójelezés ellenőrzése
  if (str.indexOf("(") >= 0 || str.indexOf(")") >= 0) {
    if (!/^1?\s?\(\d{3}\)/.test(str)) {
      return false;
    }
  }
  // számok száma
  const nums = str.match(/\d/g) ?? [];
  if (!(nums.length == 11 && nums[0] == "1") && nums.length != 10) {
    return false;
  }
  // 10 és 11 hosszú szövegek feldarabolása és ellenőrzése
  const parts = str.replace(/[^\d]/g, " ").replace(/\s+/g, " ").trim().split(" ");
  if (parts.length == 1 && nums.length == 10) {
    return true;
  }
  if (nums.length == 10) {
    if (parts[0].length != 3) {
      return false;
    }
  } else if (nums.length == 11) {
    if (parts[0].length != 1 || parts[1].length != 3) {
      return false;
    }
  }
  return true;
}
