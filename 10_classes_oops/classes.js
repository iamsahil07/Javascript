class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encrypPassword(){
        return `${this.password}@abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const day = new User("mon","mon@yahoo.com","Monday")
console.log(day.changeUsername())
console.log(day.encrypPassword())
console.log(day)

// behind the scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}@123`
}
user.prototype.newUsername = function(){
    return `${this.username.toLowerCase()}`
}

const month = new user("APRIL","apr@yahoo.com","May")
console.log(month.encryptPassword())
console.log(month.newUsername())
console.log(month)