function Person(name, age) {
  this.name = name;
  this.age = age;

  this.displayInfo = function() {
    return `Person's name is ${this.name} and he is ${this.age} years old.`
  };

  this.defineOwner = function() {
    if (age > 18) {
      return `Person's name is ${this.name} and he is ${this.age} years old.`
    } else {
      return `Minors cannot have registered cars!`
    }
  };
}

const firstPerson = new Person('John', 25);
const secondPerson = new Person('Kevin', 15);
const thirdPerson = new Person('Steven', 40);
console.log(firstPerson.displayInfo());
console.log(secondPerson.displayInfo());

function Car(brand, model, manufactureYear, lisencePlate) {
  this.brand = brand;
  this.model = model;
  this.manufactureYear = manufactureYear;
  this.lisencePlate = lisencePlate;
  
  
  this.displayCarInfo = function() {
    return `Brand: ${this.brand}\nModel: ${this.model}\nYear of manufacture: ${manufactureYear}\nLisence plate: ${lisencePlate}`
  };
}

const firstCar = new Car('Audi', 'A1 Citicarver', 2019, 'AI56788');
const secondCar = new Car('Mazda', 'CX-5', 2018, 'BC3333');
const thirdCar = new Car('Toyota', 'Celica', 1993, 'IT54321');

console.log(firstCar.displayCarInfo());
console.log(firstPerson.defineOwner() + '\n' + firstCar.displayCarInfo());
console.log(secondPerson.defineOwner() + '\n' + thirdCar.displayCarInfo());
console.log(thirdPerson.defineOwner() + '\n' + secondCar.displayCarInfo());
