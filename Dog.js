// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setStatus(status) {
    this.hasBeenLiked = status;
    this.hasBeenSwiped = true;
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="profile">
        <img
            id="like-badge"
            class="badge like hidden"
            src="/images/badge-like.png"
            alt="like badge"
         />
        <img
            id="nope-badge"
            class="badge nope hidden"
            src="/images/badge-nope.png"
            alt="nope badge"
        />
        <div class="profile-content">
            <h3>${name}, ${age}</h3>
            <span>${bio}</span>
        </div>
        <img src="${avatar}" alt="Pet's Picture" />
    </div>`;
  }
}

export default Dog;
