
//  token verify cheyan      61
const jwt=require('jsonwebtoken')

// middileware set cheyunnu       62
const authmiddileware = async(req,res,next)=>{
try{
// frontend/postmanil send cheyunna  token edkunu          63
// http requestinte extra information header
const headers = req.header('Authorization')

// header illeghil        64
if(!headers){
    return res.status(400).json({msg:"no token"})
}

// token sent chyumbo bearer token aayt aan pova               65
// bearer 0
// token 1
// split chyumbo bearer povm
const token = req.cookies.token
console.log(token);

 // token illeghil       66
    if(!token){
        return res.status(404).json({msg:"No token found"})
    }

    // token verify cheyunnu        67
 const verifyToken = jwt.verify(token,process.env.JWT_SECRETKEY)

   // save your user info            68
    // req token verify chyth save avunnu
    req.user=verifyToken

     // next userinfo use cheyan         69
    // nextilki ponm alleghil stuck aavm
    next()
}
 catch (err) {

        console.log("TOKEN ERROR:", err)

        return res.status(401).json({
            msg: "Invalid token"
        })
    }
}


// middileware routeil use cheyan      70
module.exports=authmiddileware

