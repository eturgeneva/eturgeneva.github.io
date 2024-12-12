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
        if (this._ratings.length === 0) {
            return `There is currently no rating`;
          }
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

class Book extends Media {
    constructor (author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages
    }
}

class Movie extends Media {
    constructor (director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
}

class CD extends Media {
    constructor (artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    shuffle() {
        let shuffledArray = [];
        for (let i = this._songs.length - 1; i > 0; i--) {
          // let randNum = Math.floor(Math.random() * this._songs.length);
          let randNum = Math.floor(Math.random() * (i + 1));
          // console.log(i, randNum);
          let temp = this._songs[i];
          this._songs[i] = this._songs[randNum];
          this._songs[randNum] = temp;
          // console.log(temp)
          shuffledArray.push(temp);
        }
        return shuffledArray;
    }
}

// CD class tests:
const cd1 = new CD ('Evgeny', 'Songs About Love', ['I miss you', 'Love at first sight', 'I love you', 'Cat Song'])
// console.log(cd1, cd1.songs, cd1.artist);
console.log(cd1.getAverageRating())
cd1.shuffle();
console.log(cd1.shuffle());

// Movie class tests:
// const movie1 = new Movie('Kot', 'Film about cat', 120);
// console.log(movie1);
// console.log(movie1.title, movie1.director, movie1.runTime, movie1.ratings);

// Book class tests:

// const book1 = new Book('Elena','My new book', 250);
// console.log(book1);
// // book1.addRating(10);
// book1.toggleCheckOutStatus();
// console.log(book1);
// // console.log(book1.getAverageRating());
// console.log(book1.author, book1.pages, book1.title, book1.ratings);

// Media class tests:

// const mediaItem1 = new Media("Evgeny's Biography");
// console.log(mediaItem1);

// Media methods tests:

// mediaItem1.addRating(5);
// mediaItem1.addRating(3);
// mediaItem1.addRating(10);
// mediaItem1.toggleCheckOutStatus();

// console.log(mediaItem1);
// console.log(mediaItem1.getAverageRating());

// Media getters tests:

// console.log(mediaItem1.title);
// console.log(mediaItem1.isCheckedOut);
// console.log(mediaItem1.ratings);