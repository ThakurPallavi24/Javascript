//Rest Parameter : It is denoted by three dots followed by a parameter name.
function sub(...c) {
  if (c.length === 0) {
    console.log("No values to subtract.");
    return;
  }

  let subtraction = c[0];
  for (let i = 1; i < c.length; i++) {
    subtraction -= c[i];
  }

  console.log(subtraction);
}

sub(35, 4, 7);
