// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";

let currentDog = new Dog(dogs.shift());

document.addEventListener("click", function (e) {
  if (e.target.id == "like-btn") {
    getNewDog();
  } else if (e.target.id == "reject-btn") {
    getNewDog();
  }
});

function getNewDog() {
  const nextDogData = dogs.shift();
  currentDog = new Dog(nextDogData);
  render();
}

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

render();
