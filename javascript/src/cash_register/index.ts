type Currency = "PENNY" | "NICKEL" | "DIME" | "QUARTER" | "ONE" | "FIVE" | "TEN" | "TWENTY" | "ONE HUNDRED";

type Cid = [Currency, number][];

type Status = "INSUFFICIENT_FUNDS" | "CLOSED" | "OPEN" | "DEFAULT";

type CashResult = {
  status: Status;
  change: Cid;
};

// change value array
const Change: Cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

// precision helper function
const precNum = (num: number) => parseFloat(num.toFixed(2));

export function checkCashRegister(price: number, cash: number, cid: Cid): CashResult {
  let change: CashResult = { status: "DEFAULT", change: [] };
  const diff = precNum(cash - price);
  const available = precNum(cid.reduce((prev, curr) => prev + curr[1], 0));
  if (available < diff) {
    change = { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (available == diff) {
    change = { status: "CLOSED", change: [...cid] };
  } else {
    const copyCid = [...cid];
    const copyChange = [...Change].sort((a, b) => b[1] - a[1]);
    const changeArray: Cid = [];
    let sum = 0;
    while (copyChange.length > 0) {
      const value = copyChange[0][1];
      const s = precNum(sum + value);
      if (s > diff) {
        copyChange.shift();
        continue;
      }
      const item = copyCid.find((el) => el[0] == copyChange[0][0])!;
      const count = precNum(item[1] / copyChange[0][1]);
      if (count == 0) {
        copyChange.shift();
        continue;
      }
      sum = precNum(sum + value);
      item[1] = item[1] - value;
      const i = changeArray.findIndex((el) => el[0] == item[0]);
      if (i < 0) {
        changeArray.push([item[0], value]);
      } else {
        changeArray[i][1] = precNum(changeArray[i][1] + value);
      }
    }
    if (sum == diff) {
      change = { status: "OPEN", change: [...changeArray] };
    } else {
      change = { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
  return change;
}
