// An array of meals and prices to randomly set and get Today’s Special

const arrayOfMeals = ['Fried Chicken', 'Fish Burger', 'Ceasar Salad', 'Apple Pie'];
const arrayOfPrices = [4, 6, 7, 8];
const selectedMeal = arrayOfMeals[Math.floor(Math.random() * arrayOfMeals.length)];
const selectedPrice = arrayOfPrices[Math.floor(Math.random() * arrayOfPrices.length)];

console.log(selectedMeal, selectedPrice);

const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
}
menu.meal = selectedMeal;
// console.log(menu._meal);
menu.price = selectedPrice;
// console.log(menu._price);
console.log(menu.todaysSpecial);