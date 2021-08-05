window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
});
let images = [
  "https://dl.dropbox.com/s/1odr15ryclc7kfe/dice-01.svg?raw=1",
  "https://dl.dropbox.com/s/qewmrcrbi5bzv7x/dice-02.svg?raw=1",
  "https://dl.dropbox.com/s/aybumqk6cpzon38/dice-03.svg?raw=1",
  "https://dl.dropbox.com/s/hsen4omebo9sl9h/dice-04.svg?raw=1",
  "https://dl.dropbox.com/s/7zi0fsejleidff0/dice-05.svg?raw=1",
  "https://dl.dropbox.com/s/p9v17y0q54zr0vy/dice-06.svg?raw=1"
];
let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#total").innerHTML =
      "Your roll is " + (dieOneValue + 1 + (dieTwoValue + 1));
  }, 1000);
}
roll();
