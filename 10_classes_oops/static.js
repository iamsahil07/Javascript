class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    static createID(){
        console.log(`123`)
    }
}

const day = new user("monday")
// console.log(day.createID())

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const month = new teacher("JAN", "jan@fb.com")
month.logMe(month.createID())