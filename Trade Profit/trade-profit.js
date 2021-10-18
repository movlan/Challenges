const prices = [1, 2, 3, 4];
const trades = [
  [0, 10],
  [1, -5],
  [2, 10],
  [3, -15],
];

console.log(solution(prices, trades)); // => 30

function solution(prices, trades) {
  let profit = 0;
  for (trade of trades) {
    if (trade[1] > 0) {
      // this is purchase
      profit = profit - prices[trade[0]] * trade[1];
    }
    if (trade[1] < 0) {
      // this is sell
      profit = profit + prices[trade[0]] * Math.abs(trade[1]);
    }
  }
  return profit;
}
