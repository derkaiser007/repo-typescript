// tsc 03-objects.ts
// node 03-objects.js

const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}
createUser({name: 'niraj', isPaid: false})
let newUser = {name: 'vivek', isPaid: true}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}
function createUserDetails(user: User): User{
    return {name: "", email: "", isActive: true}
    // return {name: user.name, email: user.email, isActive: user.isActive}
    // return user
}
createUserDetails({name: "", email: "", isActive: true})

type UserInfo = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}
let myUserInfo: UserInfo = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}
myUserInfo.email = "h@gmail.com"
// myUserInfo._id = "asa"

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
let myCardDetails: cardDetails = {
    cardnumber: "12345",
    cardDate: "01/25",
    cvv: 456,
}

export{}