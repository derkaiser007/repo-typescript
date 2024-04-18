// tsc 02-functions.ts
// node 02-functions.js

function addTwo(num: number): number{
    return num + 2
    // return "hello"
    // return true
}
// console.log(addTwo(5));

function getUpper(val: string): string{
    return val.toUpperCase()
}
// console.log(getUpper("hitesh"));

function signUpUser(name: string, email: string, isPaid: boolean): boolean{
    return true
}
// console.log(signUpUser("hitesh", "hitesh@lco.dev", false));

let loginUser = (name: string, email: string, isPaid: boolean = false): boolean => {
    return true
}
// console.log(loginUser("h", "h@h.com", true));

function getValue(myVal: number): boolean{
    if (myVal > 5) {
        return true
    }
    return false
}

function getData(myData: number){
    if (myData > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero: string): string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);    
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);    
}

export{}