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
  } else if (e.target.id == "refresh-btn") {
    document.getElementById("card").innerHTML = `
    <div class="profile">
    <div class="end-content">
        <h3>Refreshing...</h3>
    </div>
    <img src="images/sad.webp" alt="Pet's Picture" />
  </div>`;
    document.querySelector(".btn-container").innerHTML = ``;
    setTimeout(() => {
      location.reload();
    }, 1500);
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
      setTimeout(() => {
        endSwipe();
      }, 1500);
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

  document.querySelector(".btn-container").innerHTML = `
  <button id="refresh-btn">
    <img src="images/icons8-refresh.svg" alt="Refresh button" />
  </button>`;
}

function getNewDog() {
  const nextDogData = dogsData.shift();
  currentDog = new Dog(nextDogData);
}

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

render();
