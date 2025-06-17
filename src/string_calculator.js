//string_calculator.js
function electronsAroundCores(dice) {
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] % 2 === 1) { //ungerade
      sum += dice[i] - 1;
    }
  }
  return sum;
}
