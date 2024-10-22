// tsc 02-basics/07-interface
// node 02-basics/07-interface

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    // getCoupon: (couponname: string, value: number) => number
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "learner"
}


const hitesh: Admin = { 
    dbId: 22, 
    email: "h@h.com", 
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33
// console.log(hitesh)

/*
Difference between type and interface
1. Declaration: interface is used to define a structure or contract for objects, while type is more general and 
can define a wide variety of types.
Example:
interface Person {
    name: string;
    age: number;
}

Example:
type Person = {
    name: string;
    age: number;
};
In this case, both achieve the same result when defining the structure of the Person object.

2. Extending / Inheritance: 
interface supports declaration merging and extends another interface or multiple interfaces.
type can use intersection (&) for combining types but cannot merge multiple declarations like interfaces.
Example:
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

Example:
type Animal = {
    name: string;
};

type Dog = Animal & {
    breed: string;
};
The interface allows for inheritance (extends), while type uses intersections (&) to achieve similar functionality.

3. Declaration Merging: interface supports declaration merging, meaning if an interface is declared multiple times, 
TypeScript will merge the declarations into one.
Example:
interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {
    name: "John",
    age: 30
};
Here, the User interface is declared twice, and TypeScript merges both declarations.
type does not support declaration merging. If you declare the same type multiple times, it will result in an error.

4. Use with Primitives, Unions, and Tuples: type can define primitive types, union types, and tuple types, while 
interface is mostly used for defining the shape of objects and classes.
Example:
type ID = string | number;
type Point = [number, number];
interface Person {
    name: string;
    age: number;
}
While type can describe a variety of types (including unions, intersections, primitives, and tuples), interface 
is restricted to describing objects and class structures.

5. Complex Type Compositions: type can represent more complex types using union, intersection, and mapped types, 
while interface is more focused on defining object shapes.
Example:
type SuccessResponse = { status: "success"; data: any };
type ErrorResponse = { status: "error"; error: string };
type ApiResponse = SuccessResponse | ErrorResponse;

Interfaces cannot directly represent union types.

6. Implementation in Classes: interface can be implemented by a class using the implements keyword, allowing you 
to enforce a contract that the class must follow.
Example:
interface Person {
    name: string;
    age: number;
}

class Student implements Person {
    name: string;
    age: number;
    grade: number;

    constructor(name: string, age: number, grade: number) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

type can’t be implemented in classes directly.
*/