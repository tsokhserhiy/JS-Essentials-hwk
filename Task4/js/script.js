var i = 0;
while (i < 7) {
  var x = '';
  if (i % 2 == 0) {
    while (x.length < 10) {
      x = x + '#' + ' ';
    }
  } else {
      while (x.length < 10) {
        x = x + ' ' + '#';
      }
  }
  console.log(x);
  i++;
}
