console.log("fizzzzzbuzzzz");
  for (let x = 1; x <= 100; x++) {
    let output = "";
    if (x % 3 == 0) output += "Fizz";
    if (x % 5 == 0) output += "Buzz";
    console.log(output || x);
  }
  window.alert("Welcome to TE 6");
