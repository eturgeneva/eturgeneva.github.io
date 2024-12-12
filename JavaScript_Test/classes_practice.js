class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }

    getAverageRating() {
      let averageRating = this._ratings.reduce((acc, currVal) => {
        return acc + currVal;
      }) / this._ratings.length;
      return averageRating;
    }
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    
    addRating(rating) {
      this._ratings.push(rating);
    }
  }

const mediaItem1 = new Media("Evgeny's Biography");
console.log(mediaItem1);
// Methods tests:
mediaItem1.addRating(5);
mediaItem1.addRating(3);
mediaItem1.addRating(10);

mediaItem1.toggleCheckOutStatus();

console.log(mediaItem1);

console.log(mediaItem1.getAverageRating());
// Getters tests:
console.log(mediaItem1.title);
console.log(mediaItem1.isCheckedOut);
console.log(mediaItem1.ratings);