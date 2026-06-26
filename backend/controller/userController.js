// user data database-il store cheyyanum fetch cheyyanum User model import cheyyunnu
const User = require('../model/userModel')

const mongoose = require("mongoose");

// password hash cheyyanum compare cheyyanum bcrypt import cheyyunnu
const bcrypt = require('bcryptjs')

// authentication token create cheyyan jsonwebtoken import cheyyunnu
const jwt = require("jsonwebtoken")

// user register cheyyan register function create cheyyunnu
const register = async (req, res) => {

    try {

        // frontend-il ninn name email password edukunnu
        const { name, email, password, securityPin } = req.body

        // empty fields undo enn check cheyyunnu
        if (!name || !email || !password || !securityPin) {
            return res.status(400).json({
                msg: "All fields required"
            })
        }

        // email already database-il undo enn check cheyyunnu
        const existingUser = await User.findOne({ email })

        // email already undenkil error response return cheyyunnu
        if (existingUser) {
            return res.status(400).json({
                msg: "Email already exists"
            })
        }

        // password secure aakkan hash cheyyunnu
        const hashedPassword = await bcrypt.hash(password,10)
const hashedPin = await bcrypt.hash(securityPin,10)

        // new user database-il create cheyyunnu
       const data = await User.create({
    name,
    email,
    password: hashedPassword,
    securityPin: hashedPin
})

        // authentication token create cheyyunnu
        const token = jwt.sign(
            { id: data._id },
            process.env.JWT_SECRETKEY,
            { expiresIn: "7d" }
        )

        // token cookie-il save cheyyunnu
      res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
})

        // register success response return cheyyunnu
        return res.status(201).json({
            msg: "Register Success",
            data
        })

    } catch (err) {

        // register error console-il display cheyyunnu
        console.log("REGISTER ERROR:", err)

        // register failed response return cheyyunnu
        return res.status(500).json({
            msg: "Register Failed"
        })
    }
}

// user login cheyyan login function create cheyyunnu
const login = async (req, res) => {

    try {

        // frontend-il ninn email password edukunnu
        const { email, password } = req.body

        // email use cheyth user database-il search cheyyunnu
        const user = await User.findOne({ email })




        // user illenkil error response return cheyyunnu
        if (!user) {
            return res.status(404).json({ msg: "user not found" })
        }

        console.log("LOGIN USER =", user);
console.log("LOGIN USER ID =", user._id);

        // user login cheythal token create cheyyunnu
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRETKEY,
            { expiresIn: "7d" }
        )

        // token cookie-il save cheyyunnu
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        // generated token console-il display cheyyunnu
        console.log(token);

        // login success response return cheyyunnu
         res.status(200).json({
            msg: "Login Success",
            token: token,
            user,
            success:true
        })

    } catch (err) {

        // login error console-il display cheyyunnu
        console.log(err)

        // login failed response return cheyyunnu
        return res.status(500).json({ msg: "Login Failed" })
    }

}

// login cheytha user profile fetch cheyyan profile function create cheyyunnu
const profile = async (req, res) => {

    try {

  console.log("REQ USER =", req.user);
    console.log("USER ID =", req.user.id);
console.log("USER ID TYPE =", typeof req.user.id);
 
const allUsers = await User.find();
console.log("ALL USERS =", allUsers);

        // token-il ninn kittiya user id use cheyth user fetch cheyyunnu
 const user = await User.findById(
  new mongoose.Types.ObjectId(req.user.id)
);

        // fetched user console-il display cheyyunnu
       console.log("DB USER =", user);

        // profile data response return cheyyunnu
        res.status(202).json({ msg: "profile data", user })
    }

    catch (err) {
 console.log("PROFILE ERROR =", err);
        // profile fetch failed response return cheyyunnu
        res.status(502).json({ msg: "profile Failed" })
    }

}

// user details update cheyyan updateUsers function create cheyyunnu
const updateUsers = async (req, res) => {

    try {

        // params-il ninn user id edukunnu
        const { id } = req.params

        // user id console-il display cheyyunnu
        console.log(id)

        // user data database-il update cheyyunnu
        const updateUser = await User.findByIdAndUpdate(id, req.body,
            { new: true }
        )

        // user illenkil error response return cheyyunnu
        if (!updateUser) {
            return res.status(404).json({ msg: "Client error" })
        }

        // update success response return cheyyunnu
        res.status(202).json({ msg: "user updated successfully", updateUser })
    }

    catch (err) {

        // update failed response return cheyyunnu
        res.status(505).json({ msg: "user update failed" })

    }

}

// user delete cheyyan deleteUsers function create cheyyunnu
const deleteUsers = async (req, res) => {

    try {

        // params-il ninn user id edukunnu
        const { id } = req.params

        // user id console-il display cheyyunnu
        console.log(id)

        // user database-il ninn delete cheyyunnu
        const deletepost = await User.findByIdAndDelete(id)

        // user illenkil error response return cheyyunnu
        if (!deletepost) {
            return res.status(404).json({ msg: "Client error" })
        }

        // delete success response return cheyyunnu
        res.status(200).json({ msg: "user deleted successfully", deletepost })
    }

    catch (err) {

        // delete failed response return cheyyunnu
        res.status(500).json({ msg: "user deleted failed" })
    }

}

// forgot password functionality handle cheyyan function create cheyyunnu
const forgotPassword = async (req,res)=>{

try{

const {email, securityPin, newPassword} = req.body

const user = await User.findOne({email})

const pinMatch = await bcrypt.compare(
    securityPin,
    user.securityPin
)

if(!pinMatch){
    return res.status(400).json({
        msg:"Invalid Security PIN"
    })
}

if(!user){
    return res.status(404).json({
        msg:"User not found"
    })
}

const match = await bcrypt.compare(
    securityPin,
    user.securityPin
)

if(!match){
    return res.status(400).json({
        msg:"Invalid Security PIN"
    })
}

const hashedPassword = await bcrypt.hash(
    newPassword,
    10
)

user.password = hashedPassword

await user.save()

return res.status(200).json({
    msg:"Password Updated Successfully"
})

}

catch(err){

console.log(err)

return res.status(500).json({
    msg:"Forgot Password Failed"
})

}

}

// user logout cheyyan logout function create cheyyunnu
const logout = async (req, res) => {

    try {

        // token cookie remove cheyyunnu
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })

        // logout success response return cheyyunnu
        res.status(200).json({
            msg: "logout success"
        })

    }

    catch (err) {

        // logout failed response return cheyyunnu
        res.status(500).json({
            msg: "logout failed"
        })

    }

}

// ella controller functions export cheyyunnu route files-il use cheyyan
module.exports = { register, login, profile, updateUsers, deleteUsers, forgotPassword,logout }