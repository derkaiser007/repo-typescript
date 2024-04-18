console.log('Hi! Niraj');

class UserInfo {
    public email: string
    private name: string
    readonly city: string = "Jaipur"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name
    }
}
const hitesh = new UserInfo("h@h.com","hitesh")

class UserData {
    constructor(public email: string, private name: string, readonly city: string = "Jaipur"){
        this.email = email;
        this.name = name
    }
}

class User {

    // private _courseCount = 1
    protected _courseCount = 1

    constructor(
        public email: string, 
        public name: string,
        private userId: string,
        readonly city: string = "Jaipur"
        ){
    }

    private deleteToken(){
        console.log("Token deleted");        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    public isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
        // this.userId = '7'
        // this.deleteToken
    }
}
const niraj = new User('n@email.com', 'nks', 'ad45376g')
// niraj._courseCount
// niraj.deleteToken()
const suraj = new SubUser('s@email.com', 'skg', 'rt56478', 'delhi')
