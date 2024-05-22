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
