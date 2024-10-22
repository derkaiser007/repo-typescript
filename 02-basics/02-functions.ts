// tsc 02-basics/02-functions
// node 02-basics/02-functions

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

function signUpUser(name: string, email: string, isPaid: boolean): boolean | string | void{
    // return true
    // return "200 OK"
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

/*1. When to Use void
The void type is used when a function does not return any value. It essentially tells the TypeScript compiler 
that the function is meant to perform some side effect (like logging to the console or modifying some external 
state), but it doesn’t give back any value to the caller.

Common Use Cases for void:
Functions that do not return a value: When you have a function that just performs an action without needing to 
return anything.
Event handlers and callbacks: Event handlers often don’t return anything and instead perform some action like 
updating the UI.

When to Use void:
When you want to explicitly show that a function does not return anything.
When the function is primarily used for side effects (logging, event handling, modifying some external state, 
etc.).*/

function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello!"); // The function doesn't return anything, so its return type is void.

/*2. When to Use never
The never type is used in situations where a function never returns. This can happen for one of two reasons:

The function always throws an error.
The function never finishes executing, such as in the case of an infinite loop.
never is also used to represent impossible values in TypeScript’s type system, which is helpful in exhaustive 
type-checking scenarios (like when handling union types).

Common Use Cases for never:
Functions that throw errors: If a function always throws an error and never successfully completes, its return 
type should be never.
Functions with infinite loops: If a function has an infinite loop and will never terminate normally, its return 
type is never.
Exhaustive type checks: never is used in switch statements or conditional branches to ensure all possible cases 
have been handled.

When to Use never:
When a function will never return (it throws an error or runs indefinitely).
When you want to enforce exhaustiveness checks in union types, ensuring that all cases are handled in conditional
logic like switch statements.*/

type Shape = "Circle" | "Square";

function getArea(shape: Shape): number {
    switch (shape) {
        case "Circle":
            return 3.14; // For simplicity
        case "Square":
            return 10;
        default:
            const _exhaustiveCheck: never = shape; // Ensures all cases are handled
            throw new Error(`Unknown shape: ${shape}`);
    }
}



type Animal = "Dog" | "Cat";

function checkAnimal(animal: Animal): void {
    switch (animal) {
        case "Dog":
            console.log("It's a dog!");
            break;
        case "Cat":
            console.log("It's a cat!");
            break;
        default:
            const neverReached: never = animal; // TypeScript ensures that this case never occurs
            console.error("Unexpected animal:", neverReached);
    }
}


