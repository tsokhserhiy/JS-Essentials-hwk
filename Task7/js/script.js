var sum = 0;
start();


function start () {
  var question = confirm("Do you want to play the game?");
  if (question) {
    firstGame();
  } else {
    console.log("Today you will not win the jackpot, but you could");

  }
}

function firstGame() {
  var number = Math.round(Math.random() * 5);
  console.log(number);
  debugger;
  for (var i = 1; i < 4; i++) {
    var userNumber = prompt("Please, enter number:");
    if (userNumber == number) {
       if (i == 1) {
         sum = 10;
       } else if (i == 2) {
         sum = 5;
       } else if (i == 3) {
         sum = 2;
       }
       break;
     } else {

       continue;
     }
  }
  console.log("Your win : " + sum + "$");
  if (i == 4) {
    firstGame();
  } else {
    count();
  }

}

function count() {
  var question2 = confirm("Do you want to play one more time?");
  if (question2) {
    nextGame();
  } else {
    console.log("Thanks for the game! Your win is : " + sum + "$");
  }
}

function nextGame() {
  var number = Math.round(Math.random() * 5);
  console.log(number);
  var newsum = 0;
  for (var u = 1; u < 4; u++) {
    var userNumber = prompt("Please, enter number:");
    if (userNumber == number) {
       if (u == 1) {
         newsum = 10 * 3 + sum;
       } else if (u == 2) {
         newsum = 5 * 3 + sum;
       } else if (u == 3) {
         newsum = 2 * 3 + sum;
       }
       break;
     } else {

       continue;
     }
  }
  console.log("Your win : " + newsum + "$");
  return newsum;
}
