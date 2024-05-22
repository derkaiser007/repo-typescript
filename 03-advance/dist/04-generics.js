"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: 'niraj', type: 26081992 });
function getAllProducts(products) {
    return products;
}
const getSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(true, { connection: 'r546tgy', username: 'niraj', password: 'n32' });
class SellableContent {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
let content = new SellableContent();
content.addToCart({ name: "Mock For CAT-24", subject: 'QA, DILR, VARC', duration: 2 });
content.addToCart({ name: "QA For CAT-24", subject: 'QA', author: 'Arun Sharma' });
console.log(content.cart);
