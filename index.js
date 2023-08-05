// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";

const dogsData = dogs;

let currentDog = new Dog(dogsData.shift());
let isWaiting = false;

document.addEventListener("click", function (e) {
  if (e.target.id == "like-btn") {
    action(true);
  } else if (e.target.id == "reject-btn") {
    action(false);
  }
});

function action(bool) {
  if (!isWaiting) {
    isWaiting = true;
    let actionEl = bool ? "like-badge" : "nope-badge";
    document.getElementById(actionEl).classList.remove("hidden");
    if (!dogsData) {
      console.log("game over");
    } else {
      setTimeout(() => {
        currentDog.setStatus(bool);
        getNewDog();
        isWaiting = false;
      }, 1500);
    }
  }
}

function getNewDog() {
  const nextDogData = dogsData.shift();
  currentDog = new Dog(nextDogData);
  render();
}

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

render();
