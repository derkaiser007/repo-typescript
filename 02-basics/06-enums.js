"use strict";
// tsc 06-enums.ts
// node 06-enums.js
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 456] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 457] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 768] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var nirajSeat = SeatChoice.AISLE;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up!");
            break;
        case Direction.Down:
            console.log("Moving down!");
            break;
        case Direction.Left:
            console.log("Moving left!");
            break;
        case Direction.Right:
            console.log("Moving right!");
            break;
    }
}
