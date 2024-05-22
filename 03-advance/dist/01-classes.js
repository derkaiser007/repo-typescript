"use strict";
console.log('Hi! Niraj');
////####Usage of Public, Private and Protected Data####////
////####Example-1####////
class UserInfo {
    constructor(email, name) {
        this.city = "jaipur";
        this.email = email;
        this.name = name;
    }
}
const hitesh = new UserInfo("h@h.com", "hitesh");
// hitesh.city = "delhi"
////####Example-2####////
class UserData {
    constructor(email, name, city = "jaipur") {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const samay = new UserData("s@email.com", "s", "mumbai");
const nimesh = new UserData("n@email.com", "n");
// nimesh.city = "delhi"
////####Example-3####////
class User {
    constructor(email, name, userId, city = "jaipur") {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = city;
        // private _courseCount = 1
        this._courseCount = 1;
    }
    shareUserId() {
        return this.userId;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const niraj = new User('n@email.com', 'nks', 'ad45376g');
// niraj._courseCount
// niraj.userId
// niraj.shareUserId()
// niraj.courseCount
// niraj.courseCount()
// niraj.courseCount = 2
class SubUser1 extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
        // this.userId = '7'
        // this.shareUserId
    }
}
const samrat = new SubUser1('s@email.com', 'sam', '45rtfr456');
// samrat.isFamily
// samrat.changeCourseCount()
class SubUser2 extends User {
    constructor(email, name, userId, city = "jaipur", isFamily = true) {
        super(email, name, userId, city);
        this.isFamily = isFamily;
    }
    changeCourseCount() {
        this._courseCount = 4;
        // this.userId = '7'
    }
}
const suraj = new SubUser2('s@email.com', 'skg', 'rt56478', 'delhi', true);
// suraj.isFamily
// suraj.isFamily = true
// suraj.changeCourseCount()
// suraj.city = "jamaica"
////####Usage of Getter and Setter####////
////####Example-1####////
class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 150) {
            throw new Error("Invalid age value");
        }
        this._age = value;
    }
}
const person = new Person("John", 30);
// console.log(person.age); // Getter called, Output: 30
person.age = 40; // Setter called
// console.log(person.age); // Getter called, Output: 40
person.age = -5; // Throws error: Invalid age value
////####Example-2####////
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    // Getter for area (computed property)
    get area() {
        return this._width * this._height;
    }
    // Getter for width
    get width() {
        return this._width;
    }
    // Setter for width
    set width(value) {
        if (value <= 0) {
            throw new Error("Width must be greater than zero");
        }
        this._width = value;
    }
    // Getter for height
    get height() {
        return this._height;
    }
    // Setter for height
    set height(value) {
        if (value <= 0) {
            throw new Error("Height must be greater than zero");
        }
        this._height = value;
    }
}
const rectangle = new Rectangle(10, 20);
// console.log(rectangle.area); // Output: 200
rectangle.width = 15;
// console.log(rectangle.area); // Output: 300
rectangle.height = 25;
// console.log(rectangle.area); // Output: 375
////####Example-3####////
class BankAccount {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }
    // Getter for balance
    get balance() {
        return this._balance;
    }
    // Setter for balance
    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this._balance = amount;
    }
    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this._balance += amount;
    }
    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdraw amount must be positive");
        }
        if (this._balance - amount < 0) {
            throw new Error("Insufficient funds");
        }
        this._balance -= amount;
    }
}
const account = new BankAccount(1000);
// console.log(account.balance); // Output: 1000
account.deposit(500);
// console.log(account.balance); // Output: 1500
account.withdraw(300);
// console.log(account.balance); // Output: 1200
account.balance = -100; // Throws error: Balance cannot be negative
