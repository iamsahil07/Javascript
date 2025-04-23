// There are many times where we dont want to give property access to everyone or if someone want to take, we want to give customised code. 

//  For those reasons we use gatters and setters.


// class based gatters and setters
class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const sahil = new user("Sahil@gmail.com","abc@123")
console.log(sahil)
console.log(sahil.email)
console.log(sahil.password)