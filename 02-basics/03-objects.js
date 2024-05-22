"use strict";
// tsc 03-objects.ts
// node 03-objects.js
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'niraj', isPaid: false });
var newUser = { name: 'vivek', isPaid: true };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUserDetails(user) {
    return { name: "", email: "", isActive: true };
    // return {name: user.name, email: user.email, isActive: user.isActive}
    // return user
}
createUserDetails({ name: "", email: "", isActive: true });
var myUserInfo = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUserInfo.email = "h@gmail.com";
var myCardDetails = {
    cardnumber: "12345",
    cardDate: "01/25",
    cvv: 456,
};
