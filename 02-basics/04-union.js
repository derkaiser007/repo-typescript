"use strict";
// tsc 04-union.ts
// node 04-union.js
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
score = false;
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
function getDbIdOne(id) {
    //making some API calls
    console.log("DB id is: ".concat(id));
}
getDbIdOne(3);
getDbIdOne("3");
function getDbIdTwo(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
