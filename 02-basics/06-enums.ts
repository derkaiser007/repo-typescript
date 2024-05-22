// tsc 06-enums.ts
// node 06-enums.js

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 456,
    WINDOW,
    FOURTH = 768
}
const nirajSeat = SeatChoice.AISLE

enum Direction {
    Up,
    Down,
    Left,
    Right
}
  
function move(direction: Direction) {
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
// move(Direction.Left);
  

export{}