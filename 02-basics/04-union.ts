// tsc 04-union.ts
// node 04-union.js

let score: number | string | boolean = 33
score = 44
score = "55"
score = false

type User = {
    name: string;
    id: number
}
type Admin = {
    _name: string;
    _id: number
}
let hitesh: User | Admin = {name: "hitesh", id: 334}
hitesh = {_name: "hc", _id: 334}

function getDbIdOne(id: number | string){
    //making some API calls
    console.log(`DB id is: ${id}`);    
}
getDbIdOne(3)
getDbIdOne("3")

function getDbIdTwo(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
    else if (typeof id === "number") {
        id.toFixed()
    }  
}

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", 3, "2", true]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"

export{}