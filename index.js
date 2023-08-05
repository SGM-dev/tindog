// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";

let dogsData = dogs;

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
    if (dogsData.length > 0) {
      setTimeout(() => {
        currentDog.setStatus(bool);
        getNewDog();
        render();
        isWaiting = false;
      }, 1500);
    } else {
      endSwipe();
    }
  }
}

function endSwipe() {
  document.getElementById("card").innerHTML = `
  <div class="profile">
  <div class="end-content">
      <h3>You Ran out of Swipes!</h3>
      <span>Refresh the page to start again.</span>
  </div>
  <img src="images/sad.webp" alt="Pet's Picture" />
</div>`;

  document.querySelector(".btn-container").innerHTML = ``;
}

function getNewDog() {
  const nextDogData = dogsData.shift();
  currentDog = new Dog(nextDogData);
}

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

render();
