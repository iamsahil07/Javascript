const user = {
    userName : "sahil",
    passWord : "abc123",
    isLoggedIn : true,
    getUserDetails : function(){
        console.log("Got user details from database.")
        console.log(this)
    }
    
}

console.log(user['userName'])
console.log(user['getUserDetails']())

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

}
const userOne = new User("sahil", 12, true)
const userTwo = new User("hi", 22, true)
console.log(userTwo)
console.log(userOne) 