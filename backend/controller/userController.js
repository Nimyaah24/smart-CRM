

// user model import cheyunnu dbil data save aavan
const User = require('../model/userModel')

// password hash & compare cheyan
const bcrypt = require('bcryptjs')

// login token create cheyan
const jwt = require("jsonwebtoken")

// REGISTER
// REGISTER FUNCTION CREATE CHEYUNNU
// const register = async (req, res) => {
//     // ERROR HANDLING
//     try {
//         // FRONTEND IL NINN DATA EDUKUNNU
//         const { name, email, password } = req.body

//         // EMAIL ALREADY DATABASE IL UNDO
//         // CHECK CHEYUNNU
//         const exstingUser = await User.findOne({ email })

//         // USER ALREADY UNDENKIL
//         if (exstingUser) {
//             return res.status(404).json({
//                 msg: "email already exists"
//             })
//         }

//         // PASSWORD HASH CHEYUNNU
//         // 10 = SALT ROUND
//         const hashedPassword = await bcrypt.hash(password, 10)


//         // DATABASE IL USER CREATE CHEYUNNU
//         const data = await User.create({
//             name, email,
//             // hashed password save cheyunnu
//             password: hashedPassword
//         })


//         // JWT TOKEN CREATE CHEYUNNU
//         const token = jwt.sign(
//             // payload
//             { id: data._id },
//             // secret key
//            process.env.JWT_SECRETKEY,
//             // token expiry
//             {
//                 expiresIn: "7d"
//             }
//         )

//         // COOKIE CREATE CHEYUNNU
//         res.cookie("token", token, {
//             // frontend js il access cheyan pattilla
//             httpOnly: true,
//             // localhost use cheyyumbo false mathi
//             secure: false,
//             // same site request allow cheyan
//             sameSite: "lax",
//             // 7 days expiry
//             maxAge: 7 * 24 * 60 * 60 * 1000
//         })

//         // SUCCESS RESPONSE
//         res.status(201).json({
//             msg: "Register Success", data
//         })
//     }

//     // ERROR
//     catch (err) {
//         // terminal il error kaanan
//         console.log(err)

//         // frontend response
//         res.status(500).json({ msg: "Register Failed" })
//     }

// }

const register = async (req, res) => {

    try {

        // frontend il ninn data edukunnu
        const { name, email, password } = req.body

        // empty check
        if (!name || !email || !password) {
            return res.status(400).json({
                msg: "All fields required"
            })
        }

        // email already exist check
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({
                msg: "Email already exists"
            })
        }

        // password hash cheyyunnu
        const hashedPassword = await bcrypt.hash(password, 10)

        // user create cheyyunnu
        const data = await User.create({
            name,
            email,
            password: hashedPassword
        })

        //  token create chyunnu
        const token = jwt.sign(
            { id: data._id },
            process.env.JWT_SECRETKEY,
            { expiresIn: "7d" }
        )

        // cookie set cheyyunnu
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            // 1 day nikan
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({
            msg: "Register Success",
            data
        })

    } catch (err) {

        console.log("REGISTER ERROR:", err) // ✅ DEBUG FIX

        return res.status(500).json({
            msg: "Register Failed"
        })
    }
}

// LOGIN
// login function create cheyunnu
const login = async (req, res) => {

    // error handling
    try {
        // frontend il ninn email & password edukunnu
        const { email, password } = req.body

        // email database il undo enn check cheyunnu
        const user = await User.findOne({ email })

        // user illenkil
        if (!user) {
            return res.status(404).json({ msg: "user not found" })
        }

        // token create
        // token create cheyunnu
        const token = jwt.sign(
            // payload
            { id: user._id },
            // secret key
            process.env.JWT_SECRETKEY,
            // token expiry
            { expiresIn: "7d" }
        )

        // cookie il token save cheyunnu
        // cookie store
        res.cookie("token", token, {
            // frontend js il access cheyan pattilla
            httpOnly: true,
            // localhost use cheyyumbo false mathi
            secure: false,
            // same site request allow cheyan
            sameSite: "lax",
            // 7 days expiry
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

console.log(token);

        // login success response
         res.status(200).json({
            msg: "Login Success",
            token: token,
            user,
            success:true
        })


        // error
    } catch (err) {
        console.log(err)
        return res.status(500).json({ msg: "Login Failed" })
    }

}


// PROFILE
// login cheytha user data fetch cheyan
const profile = async (req, res) => {

    try {
        // middleware il save cheytha user id use cheyunnu
        const user = await User.findById(req.user.id)
        console.log(user)
        // response
        res.status(202).json({ msg: "profile data", user })
    }

    // error
    catch (err) {
        res.status(502).json({ msg: "profile Failed" })
    }

}

// UPDATE USER
// name & email update cheyan
const updateUsers = async (req, res) => {

    // error handling
    try {

        // params il ninn id edukunnu
        const { id } = req.params
        console.log(id)

        // database update
        const updateUser = await User.findByIdAndUpdate(id, req.body,
            // updated data return cheyan
            { new: true }
        )

        // user illenkil
        if (!updateUser) {
            return res.status(404).json({ msg: "Client error" })
        }

        // success response
        res.status(202).json({ msg: "user updated successfully", updateUser })
    }

    // error
    catch (err) {
        res.status(505).json({ msg: "user update failed" })

    }

}

// DELETE USER
// user delete cheyan
const deleteUsers = async (req, res) => {

    try {

        // params il ninn id edukunnu
        const { id } = req.params

        console.log(id)

        // user delete cheyunnu
        const deletepost = await User.findByIdAndDelete(id)

        // user illenkil
        if (!deletepost) {
            return res.status(404).json({ msg: "Client error" })
        }

        // success response
        res.status(200).json({ msg: "user deleted successfully", deletepost })
    }

    // error
    catch (err) {
        res.status(500).json({ msg: "user deleted failed" })
    }

}

// FORGOT PASSWORD
// password reset cheyan
const forgotPassword = async (req, res) => {

    try {

        // body il ninn data edukunnu
        const { email, newPassword } = req.body

        // user find cheyunnu
        const user = await User.findOne({ email })

        // user illenkil
        if (!user) {
            return res.status(402).json({ msg: "user not found" })
        }

        // new password hash cheyunnu
        const hashedPassword = await bcrypt.hash(newPassword, 10)

        // hashed password save cheyunnu
        user.password = hashedPassword

        // database save
        await user.save()

        // success response
        res.status(202).json({ msg: "password updated successfully" })

    }

    // error
    catch (err) {
        res.status(502).json({ msg: "forgot password failed" })
    }

}

// LOGOUT
// cookie clear cheyan
const logout = async (req, res) => {

    try {
        // token cookie remove cheyunnu
        res.clearCookie("token", {

            // same settings kodukkanam
            httpOnly: true,
            secure: false,
            sameSite: "lax"

        })

        // success response
        res.status(200).json({
            msg: "logout success"
        })

    }

    // error
    catch (err) {
        res.status(500).json({
            msg: "logout failed"
        })

    }

}

// export functions
module.exports = { register, login, profile, updateUsers, deleteUsers, forgotPassword,logout }



