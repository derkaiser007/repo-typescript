"use strict";
// tsc 02-basics/05-tuple
// node 02-basics/05-tuple
Object.defineProperty(exports, "__esModule", { value: true });
var user = [1, "hc"];
var userInfo;
userInfo = ["hc", 131, true];
var infoData = [255, 123, 112];
var newUser = [112, "example@google.com"];
newUser[1] = "hc.com";
// newUser.push(true)
newUser.push("true");
console.log(newUser);
