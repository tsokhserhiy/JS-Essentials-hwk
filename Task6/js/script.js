var userNumber = prompt("Please, enter your number!");
var randomNumber = Math.round(Math.random() * 100);

while (true) {

  if (userNumber < randomNumber) {
    userNumber = prompt("Our number is higher, try again");
  }
  else if (userNumber > randomNumber) {
    userNumber = prompt("Our number is lower, try again");
  }
  else {
    alert("You are right, the number is " + randomNumber);
    break;
  }
}
