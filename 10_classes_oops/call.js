function setUserName(username){
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const hello = new createUser("sahil","abc123@yahoo.com", "abc123")
console.log(hello)