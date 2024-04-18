"use strict";
// tsc 02-functions.ts
// node 02-functions.js
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
    // return true
}
// console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
// console.log(getUpper("hitesh"));
function signUpUser(name, email, isPaid) {
    return true;
}
// console.log(signUpUser("hitesh", "hitesh@lco.dev", false));
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return true;
};
// console.log(loginUser("h", "h@h.com", true));
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
function getData(myData) {
    if (myData > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
