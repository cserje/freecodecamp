export function checkHrszRegex(input: string){
  const regex = /^[1-9]\d+(\/\d+(\/[ABCDFGHJKLMNPRSTV]{1,2}(\/\d+){0,1}){0,1}){0,1}$/;
  return regex.test(input);
}