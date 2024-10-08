function detectType(val: number | string ){
    if (typeof val === "string") {
        return val.toLowerCase()
    } 
    else if (typeof val === "number") {
        return val + 3
    }
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    return id.toLowerCase()
}

function printAll(strs: string | string[] | null) {    
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } 
      else if (typeof strs === "string") {
        console.log(strs);
      }
    }
}

interface User {
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}
function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());        
    } 
    else if (typeof x === "string") {
      console.log(x.toUpperCase());                
    }
}



interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getArea_1(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } 
    else if (shape.kind === "square") {
        return shape.side * shape.side
    } 
    else if (shape.kind === "rectangle") {
        return shape.length * shape.width
    }
}


function getArea_2(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return `Can't calculate the area of shape ${_defaultforshape}.`
    }
}



type Fish = {
    swim: () => void
};
type Bird = {
    fly: () => void
};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        return "fish food"
    } 
    else {
        return "bird Food"
    }
}

/*Explanation:
Types:
Fish: This type has a method swim(), which represents the behavior of a fish.
Bird: This type has a method fly(), which represents the behavior of a bird.

Union Type:
The function isFish accepts an argument pet that can be either of type Fish or Bird. This is represented by the 
union type Fish | Bird.

Type Guard (pet is Fish):
The function isFish is a user-defined type guard. The return type pet is Fish is a special return type in 
TypeScript that tells the TypeScript compiler that if isFish returns true, then within the following code block, 
pet should be treated as a Fish rather than Bird.

Narrowing:
Inside the function, the expression (pet as Fish) casts the pet variable to a Fish. The code then checks if 
swim is defined (pet.swim !== undefined).
If swim exists, it means that pet is of type Fish, and the function returns true. If swim is not present, the 
function returns false, meaning that pet is of type Bird.*/