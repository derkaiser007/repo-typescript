// tsc 05-tuple.ts
// node 05-tuple.js

// const user: (string | number)[] = [1, "hc"]

let user: [string, number, boolean]
user = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type userData = [number, string]
const newUser: userData = [112, "example@google.com"]
newUser[1] = "hc.com"
// newUser.push(true)

export{}
