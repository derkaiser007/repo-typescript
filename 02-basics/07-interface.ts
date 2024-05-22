// tsc 07-interface.ts
// node 07-interface.js

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