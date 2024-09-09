const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}
identityThree(true)

function identityFour<T>(val: T): T{
    return val
}
interface Bottle{
    brand: string,
    type: number
}
identityFour<Bottle>({brand: 'niraj', type: 26081992})

function getAllProducts<T>(products: T[]): T[] {
    return products
}

const getSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}
function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}
anotherFunction(true, {connection: 'r546tgy', username: 'niraj', password: 'n32'})

interface Quiz{
    name: string,
    subject: string,
    duration: number
}
interface Course{
    name: string,
    subject: string,
    author: string
}
class SellableContent<T extends Quiz | Course>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
let content = new SellableContent()
content.addToCart({name: "Mock For CAT-24", subject: 'QA, DILR, VARC', duration: 2})
content.addToCart({name: "QA For CAT-24", subject: 'QA', author: 'Arun Sharma'})
console.log(content.cart);

/*1. Generics allow you to define a type parameter in classes, functions, or interfaces that can be substituted 
with different types later on. This helps to create components that work with multiple data types while 
avoiding the need for casting or duplication of code.*/

/*Example Without Generics: Without generics, if you want to create a function that works with both number and 
string, you may end up writing multiple versions of the same function:*/

function identityString(arg: string): string {
    return arg;
}

function identityNumber(arg: number): number {
    return arg;
}

/*Example With Generics: Using generics, you can define a single function that works with both types:*/

function identity<T>(arg: T): T {
    return arg;
}

const result1 = identity<number>(10); // Works with number
const result2 = identity<string>("Hello"); // Works with string

/*2. Benefits of Using Generics:

Code Reusability: Generics allow you to write reusable functions, classes, and interfaces that work with 
various data types. Instead of writing multiple versions of the same code for different types, you can write 
one generic version that adapts to any type.*/

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 25 }); //{ name: "Alice", age: 25 }

/*Type Safety: Generics maintain type safety by ensuring that the type of data passed into a function or class 
is consistent. This helps catch errors at compile-time rather than runtime, as opposed to using any, which can 
lead to less strict type checking.*/

function reverseArray<T>(items: T[]): T[] {
    return items.reverse();
}

const numbers = [1, 2, 3];
const reversedNumbers = reverseArray(numbers); // Correctly inferred as number[]

const strings = ["a", "b", "c"];
const reversedStrings = reverseArray(strings); // Correctly inferred as string[]

/*Flexibility with Constraints: Generics allow you to place constraints on the types that can be passed to a 
function, class, or interface. This provides more flexibility while maintaining type safety.*/

interface Lengthwise {
    length: number;
}

/*The Lengthwise interface defines a contract where any object of this type must have a length property of type 
number. This sets the ground for the constraint you'll apply to your generic function.*/

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

/*Here, the function logLength is defined as a generic function with a type parameter T. The type parameter T 
is constrained by Lengthwise using the extends keyword:
T extends Lengthwise: This means that T can be any type, but it must conform to the Lengthwise interface. In 
other words, T must have a length property of type number.

Function Arguments:
arg: T: The function accepts a parameter arg of type T. Because T is constrained by Lengthwise, this guarantees 
that arg will have a length property.
Return Type: The function returns arg, which is of type T.

Console Log:
Inside the function, arg.length is logged. Since T must have a length property due to the constraint, TypeScript
knows this operation is safe and will not throw an error at compile time.*/

logLength("Hello"); // Works, as string has a length property
logLength([1, 2, 3]); // Works, as arrays have a length property
// logLength(123); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

/*How the Calls Work:
Now, let's look at the specific function calls:

a) logLength("Hello");
"Hello" is of type string, and string has a length property in JavaScript.
Since T extends Lengthwise, TypeScript allows the call because string fits the constraint. It has a length 
property, so it's compatible with the Lengthwise interface.

b) logLength([1, 2, 3]);
[1, 2, 3] is an array, and arrays in JavaScript have a length property.
The array [1, 2, 3] also fits the Lengthwise constraint since it has a length property, so TypeScript allows 
this call as well.*/

/*3. Generics in Classes: Generics can be applied to classes to make them more flexible and reusable. A class 
can work with multiple types, and the specific type is determined when the class is instantiated.*/

class Box<T> {
    private _content: T;

    constructor(content: T) {
        this._content = content;
    }

    getContent(): T {
        return this._content;
    }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getContent()); // Output: 100

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Output: Hello

/*4. Generics in Interfaces: Interfaces in TypeScript can also be generic, which allows them to define 
structures that work with different data types.*/

interface Pair<T, U> {
    first: T;
    second: U;
}

const numberPair: Pair<number, number> = { first: 1, second: 2 };
const stringNumberPair: Pair<string, number> = { first: "One", second: 1 };

/*5. Generics in Functions: Generics are commonly used in functions to create reusable algorithms that work 
with a wide range of types, without losing type safety.*/

function swap<T, U>(first: T, second: U): [U, T] {
    return [second, first];
}

const swapped = swap<number, string>(1, "hello");
console.log(swapped); // Output: ['hello', 1]

/*6. Generics in OOP Design Patterns: Generics play a crucial role in various OOP design patterns like 
factories, repositories, and iterators. By using generics, these patterns can be designed to work with 
multiple types, increasing flexibility and reusability.*/

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const userRepo = new Repository<{ id: number, name: string }>();
userRepo.add({ id: 1, name: "Alice" });
console.log(userRepo.getAll()); // Output: [{ id: 1, name: 'Alice' }]






