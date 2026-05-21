

// mongodb import cheyunnu mongodb schema create cheyan      22
const mongoose=require('mongoose')

// user db structure create cheyunnu       23
const userSchema= new mongoose.Schema({

    // user name filed    24
name:{
    type:String,
    required:true
},

// user email filed    25
email:{
    type:String,
    required:true,
    // same email 2 pravisyathil koodthal varan paadila  
    unique: true
},

// password store cheyan      26
password:{
    type:String,
    required:true
},

// otp verification save aavan        27
otp:{
type:String
},

// email verify aanon check cheyan       28
isVerified:{
    type:Boolean,
    default:false
}
}, 

// createdAt and updatedAt automatic save cheyum      29
{timestamps:true})

// mongodb collection create cheyunnu       30
const User= mongoose.model("user",userSchema)

// controlleril use cheyan export cheyunnu       31
module.exports=User

