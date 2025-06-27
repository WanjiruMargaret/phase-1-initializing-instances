// Write your code here
// 1. Breakfast class
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// 2. Lunch class
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// 3. Dinner class with private dessert
class Dinner {
  #dessert; // private property

  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }

  // Optional: getter for dessert if you want controlled access
  getDessert() {
    return this.#dessert;
  }
}
const myBreakfast = new Breakfast("Pancakes", "Coffee");
console.log(myBreakfast.food);  // Pancakes

const myLunch = new Lunch("Caesar", "Tomato", "Lemonade");
console.log(myLunch.soup);  // Tomato

const myDinner = new Dinner("Greek", "Minestrone", "Steak", "Cheesecake");
console.log(myDinner.entree); // Steak
// console.log(myDinner.#dessert); // ❌ SyntaxError: Private field '#dessert' must be declared in an enclosing class
console.log(myDinner.getDessert()); // Cheesecake ✅
