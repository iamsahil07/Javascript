class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        return `USERNAME is : ${this.username}`
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by : ${this.username}`)
    }
}

const day = new teacher("Monday" , "mon@fb.com" , "monday@123")
day.addCourse()