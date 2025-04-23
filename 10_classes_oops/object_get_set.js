// Object based gatters and setters


// Gatters and setters ek special method jo main property ke uper rakh raha hu

// Get be like: main jo process overwrite kar raha hu vo memory se le kar aane ka or memory tak chord kar aane ka hai

// So when we wrote get, that means memory se this._email le kar ao or usse uppercase kar diya(to get use karne se hum raste main hi overwrite kar diya)

// Set be like : set ke ander user ko mtlb nhi hai ki vo _email hai ya email hai. set: mere liye to email ek method nhi ek property hi hai, to main .email ko access karunga, to ab jab main ne ye property access kar li hai to main aap ko value provide karunga or aap usko store kar loge

const user = {
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    _email : 'sahil@gmail.com', // underscore ka mtlb main usse private property define kar raha hu which means vo normal users ke use main nhi ayegi
    _passowrd : "abc@123"
}

// User ke base per ek object create karo or usse day pe refer karo
const day = Object.create(user)
console.log(day.email)