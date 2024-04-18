"use strict";
console.log('Hi! Niraj');
class UserInfo {
    constructor(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
}
const hitesh = new UserInfo("h@h.com", "hitesh");
class UserData {
    constructor(email, name, city = "Jaipur") {
        this.email = email;
        this.name = name;
        this.city = city;
        this.email = email;
        this.name = name;
    }
}
class User {
    constructor(email, name, userId, city = "Jaipur") {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = city;
        // private _courseCount = 1
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const niraj = new User('n@email.com', 'nks', 'ad45376g');
// niraj._courseCount
// niraj.deleteToken()
const suraj = new SubUser('s@email.com', 'skg', 'rt56478', 'delhi');
