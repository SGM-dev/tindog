// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";

let currentIndex = 0;
let currentDog = new Dog(dogs[currentIndex]);

document.addEventListener("click", function (e) {
  if (e.target.id == "like-btn") {
    console.log(e.target);
  } else if (e.target.id == "reject-btn") {
    console.log(e.target);
  }
});

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

render();
