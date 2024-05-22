// tsc 05-tuple.ts
// node 05-tuple.js

const user: (string | number)[] = [1, "hc"]

let userInfo: [string, number, boolean]
userInfo = ["hc", 131, true]

let infoData: [number, number, number] = [255, 123, 112]

type userData = [number, string]
const newUser: userData = [112, "example@google.com"]
newUser[1] = "hc.com"
// newUser.push(true)
newUser.push("true")
// console.log(newUser)

export{}
