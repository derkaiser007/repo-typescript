interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){
    }

    createStory(): void {
        console.log("Story was created");        
    }
}


////What is the advantage of useing interface with classes?////
/* 1.Defining a Contract: An interface defines a set of methods and properties that a class must implement. 
This ensures that any class implementing the interface will have the required structure, making your code more 
predictable and easier to maintain.*/
interface IShape {
    area(): number;
    perimeter(): number;
}

class RectangleShape implements IShape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}
/*In this example, the Rectangle class implements the IShape interface, so it must define both the area() 
and perimeter() methods.*/

/*2. Providing a Common Interface for Different Implementations: Interfaces allow you to define a common set 
of methods and properties for classes that might have different implementations. This is particularly useful 
for polymorphism, where different classes are treated uniformly.*/
interface IAnimal {
    makeSound(): void;
}

class Dog implements IAnimal {
    makeSound(): void {
        console.log("Woof!");
    }
}

class Cat implements IAnimal {
    makeSound(): void {
        console.log("Meow!");
    }
}

function makeAnimalSound(animal: IAnimal) {
    animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSound(dog); // Outputs: Woof!
makeAnimalSound(cat); // Outputs: Meow!
/*Both Dog and Cat classes implement the IAnimal interface, so they both have the makeSound() method. 
This allows you to write functions like makeAnimalSound() that can accept any object implementing IAnimal.*/

/*3. Enforcing Consistency Across Multiple Classes: Interfaces can be used to enforce consistency across multiple 
classes. This is helpful in large projects where multiple classes need to have the same set of methods and 
properties.*/
interface IUser {
    id: string;
    name: string;
    email: string;
    login(): void;
}

class AdminUser implements IUser {
    constructor(public id: string, public name: string, public email: string) {}

    login(): void {
        console.log(`${this.name} (Admin) has logged in.`);
    }
}

class RegularUser implements IUser {
    constructor(public id: string, public name: string, public email: string) {}

    login(): void {
        console.log(`${this.name} (User) has logged in.`);
    }
}
/*Here, both AdminUser and RegularUser classes implement the IUser interface, ensuring that they both have 
the id, name, email, and login() methods, maintaining consistency across different types of users.*/

/*4. Facilitating Dependency Injection: Interfaces are often used in scenarios where dependency injection is 
required. By programming to an interface, you can easily swap out implementations without changing the 
dependent code.*/
interface ILogger {
    log(message: string): void;
}

class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

class FileLogger implements ILogger {
    log(message: string): void {
        // Imagine this writes to a file
        console.log(`Writing to file: ${message}`);
    }
}

class Application {
    constructor(private logger: ILogger) {}

    run(): void {
        this.logger.log("Application is running");
    }
}

const app1 = new Application(new ConsoleLogger());
app1.run(); // Outputs to console

const app2 = new Application(new FileLogger());
app2.run(); // Outputs as if writing to a file
/*The Application class depends on an ILogger interface rather than a specific implementation. This allows you 
to easily change the logging mechanism (e.g., from ConsoleLogger to FileLogger) without modifying the 
Application class.*/

/*5. Supporting Multiple Inheritance of Types: While classes in TypeScript (and JavaScript) can only extend 
one class, they can implement multiple interfaces. This allows you to create classes that conform to multiple 
contracts.*/
interface Printable {
    print(): void;
}

interface Savable {
    save(): void;
}

class Documenting implements Printable, Savable {
    print(): void {
        console.log("Printing document...");
    }

    save(): void {
        console.log("Saving document...");
    }
}
/*The Document class implements both Printable and Savable interfaces, meaning it must provide the print() 
and save() methods. This allows Document to conform to multiple behaviors.*/
