var moneyInPocket = prompt("how much money do you have");
var eatenCrisp = prompt("have you eaten crisp (reply with true or false)")
var PriceCrisp = prompt("Price of the crisps(if free put 0)");

if (parseInt(moneyInPocket) >10 && eatenCrisp === "true") {
  alert("buy another drink");
} else if (parseInt(moneyInPocket)>5 && parseInt(PriceCrisp) === 0) {
  alert("Buy some crisps");
} else {
  alert("Go home");
}

var name = prompt("Are you 'Tim' or 'Bob'");

if (name === "Bob") {
  console.log("Hi, bob");
}
else if (name === "Tim") {
  console.log("Hi Tim");
}

switch (name) {
  case "Bob":
  alert("Hi, Bob");
  break;
  case "Tim":
  alert("Hi, Tim");
  break;
  default:
  alert("Hi, default person");
}
