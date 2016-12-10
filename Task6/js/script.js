function startGame() {
  var randomNumber = Math.round(Math.random() * 100);
  function go() {
    var userNumber = prompt("Please, enter your number!");
    if (typeof(userNumber) == 'string') {
      var userNumber = parseInt(userNumber);
      if (isNaN(userNumber) == false) {
        if (userNumber < randomNumber) {
          alert("Our number is higher, try again");
          go();
        }
        else if (userNumber > randomNumber) {
          alert("Our number is lower, try again");
          go();
        }
        else {
          alert("You are right, the number is " + randomNumber);
        }
      } else {
          alert('You have entered incorect value. Please try again');
          go();
        }
    }
  }
  go();
}
startGame();
