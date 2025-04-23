// Function based gatters and setters

function user(email, password){
   
    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
    this.email =  email;
    this.password = password;
}

const day = new user("sahil@gamil.com","abc@123")
console.log(day.password)
console.log(day.email)