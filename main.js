// var moneyInPocket =prompt('How much do you have to spend');
//
// if (moneyInPocket > 10) {
//   console.log("I can buy a drink wth lunch");
// } else if (moneyInPocket > 5) {
//   console.log("I can buy just some crisps");
// } else {
//   console.log("I cant buy anything");
// }

// var moneyInPocket = prompt("how much money do you have");
// var eatenCrisp = prompt("have you eaten crisp (reply with true or false)")
// var PriceCrisp = prompt("Price of the crisps(if free put 0)");
//
// if (moneyInPocket >10 && eatenCrisp === "true") {
//   console.log("buy another drink");
// } else if (moneyInPocket>5 || PriceCrisp === 0) {
//   console.log("Buy some crisps");
// } else {
//   console.log("Go home");
// }

var name = "Tim";

// if (name === "bob") {
//   console.log("Hi, bob");
// }
// else if (name === "Tim") {
//   console.log("Hi Tim");
// }

switch (name) {
  case "Bob":
  console.log("Hi, Bob");
  break;
  case "Tim":
  console.log("Hi, Tim");
  break;
  default:
  console.log("Hi, default person");
}
