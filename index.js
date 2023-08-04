// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";

let currentIndex = 0;
let currentDog = new Dog(dogs[currentIndex]);

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}


render()