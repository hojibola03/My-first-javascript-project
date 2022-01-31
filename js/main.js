// Math.floor(Math.random() * 100 + 1);
// console.log(Math.random() * 100);

let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 100);
btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;

  if (input == number) {
    output.innerHTML = `You guessed rihgt , your number was ${number}`;
  } else if (input < number) {
    output.innerHTML = "You guesssed too low!";
  } else if (input > number) {
    output.innerHTML = "You guessed too high";
  } else {
    output.innerHTML = "You did not enter a number";
  }
});
