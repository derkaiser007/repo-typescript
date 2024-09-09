abstract class TakeImage {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        return 8
    }
}


class Insta extends TakeImage{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");            
        }
}

const hc = new Insta("test", "Test", 3);
hc.getSepia();
console.log(hc.getReelTime());

/*What is the difference between classes with interface and abstract classes?*/
/*1. Purpose and Usage:

Interface:An interface is used to define a contract that classes or objects must adhere to. It declares the 
structure (methods and properties) that a class or object must implement, but it does not provide any 
implementation.Interfaces are best used when you want to ensure that a class follows a specific structure but 
don’t need to provide any shared behavior or functionality.

Abstract Class:An abstract class is a base class that can contain both abstract methods (without implementation)
and concrete methods (with implementation). It provides a partial implementation that can be shared across 
derived classes.Abstract classes are ideal when you want to enforce a contract while also providing some common 
behavior or functionality that multiple derived classes can share.*/

/*2. Implementation:

Interface:No Implementation: Interfaces cannot contain any implementation of methods or properties. They only 
declare what methods and properties a class should have.

Abstract Class:Partial Implementation: Abstract classes can contain both abstract methods (which must be 
implemented by derived classes) and concrete methods (which provide default behavior).*/

interface ILogger {
    log(message: string): void;
}

class ConsoleLogging implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}


abstract class Animal {
    abstract makeSound(): void; // Abstract method

    move(): void { // Concrete method
        console.log("The animal moves.");
    }
}

class Doggy extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

/*3. Multiple Inheritance:

Interface:Multiple Interfaces: A class can implement multiple interfaces, allowing it to adhere to multiple 
contracts simultaneously.

Abstract Class:Single Inheritance: A class can only extend one abstract (or regular) class. This limits the 
class to inheriting from only one base class.*/

interface Printable {
    print(): void;
}

interface Savable {
    save(): void;
}

class Documents implements Printable, Savable {
    print(): void {
        console.log("Printing document...");
    }

    save(): void {
        console.log("Saving document...");
    }
}


abstract class GeometricalShape {
    abstract area(): number;
}

class RectangularShape extends GeometricalShape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}



/*What is the difference between drawing subclasses from regular classes and abstract classes?*/

/*1. Purpose and Enforcement:

Subclassing from a Regular Class:
Purpose: When you subclass from a regular class, the base class typically provides complete implementation, 
which the derived class can inherit, extend, or override as needed. There is no requirement for the derived 
class to implement anything unless you want to modify or add behavior.

Enforcement: There is no enforcement of specific methods or properties that the subclass must implement. 
You can choose to inherit all the behavior and functionality of the base class or override it.

Subclassing from an Abstract Class:
Purpose: Abstract classes serve as blueprints that define the structure of derived classes. They contain 
abstract methods, which are declared but not implemented. These abstract methods must be implemented by the 
derived class. Additionally, abstract classes can also include concrete methods with shared functionality.

Enforcement: When you subclass from an abstract class, you must implement all abstract methods in the derived 
class, enforcing a specific structure.*/

/*2. Level of Flexibility:

Subclassing from a Regular Class:
Flexibility: When subclassing from a regular class, you have more flexibility to pick and choose what to 
inherit, override, or extend. Since there are no abstract methods, you are not forced to implement any specific 
behavior. This is useful when you want to inherit full behavior or partially override functionality.

No Obligation to Implement Methods: The derived class can inherit everything from the base class and doesn’t 
need to modify or implement anything unless specifically desired.

Subclassing from an Abstract Class:
Less Flexibility, More Structure: When you subclass from an abstract class, there is less flexibility in terms 
of method implementation because abstract methods are required to be implemented. This provides more structure 
and enforces consistent behavior across different subclasses.

Required Method Implementations: All abstract methods declared in the abstract class must be implemented in 
the subclass, ensuring a certain level of uniformity across subclasses.*/

/*3. Use of Concrete vs. Abstract Methods:

Subclassing from a Regular Class:
Concrete Methods Only: Regular classes contain only concrete methods, which means all methods are fully 
implemented. Subclasses inherit these methods and can override them as needed, but there are no methods that 
are "left for the subclass to implement."

Subclassing from an Abstract Class:
Combination of Abstract and Concrete Methods: Abstract classes can have a mix of abstract methods (which have 
no implementation) and concrete methods (which have implementation). Subclasses must implement the abstract 
methods but can optionally use or override the concrete methods.
*/

/*4. Instantiation:

Subclassing from a Regular Class:
Instantiable Base Class: Regular classes can be instantiated directly. You can create instances of a regular 
class without needing to subclass them.

Subclassing from an Abstract Class:
Non-instantiable Base Class: Abstract classes cannot be instantiated directly. You cannot create an instance 
of an abstract class; it must be subclassed first. This ensures that the class is only used as a base class.*/


