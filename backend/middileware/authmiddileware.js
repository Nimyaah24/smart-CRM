// jwt token verify cheyyan jsonwebtoken import cheyyunnu
const jwt = require("jsonwebtoken");

// user authentication check cheyyan middleware function create cheyyunnu
const authmiddileware = async (req, res, next) => {
  try {

    // browser cookies-il ninn token edukkunnu
    const token = req.cookies.token;

    // token console-il display cheyyunnu debugginginu vendi
    console.log("TOKEN =", token);

    // token illenkil unauthorized response return cheyyunnu
    if (!token) {
      return res.status(401).json({
        msg: "No token found"
      });
    }

    // token verify cheyth user data decode cheyyunnu
    const verifyToken = jwt.verify(
      token,
      process.env.JWT_SECRETKEY
    );

    // decoded user data request object-il store cheyyunnu
    req.user = verifyToken;

    // adutha middleware allenkil controllerilek pokunnu
    next();

  } catch (err) {

    // token verification error console-il display cheyyunnu
    console.log("TOKEN ERROR:", err);

    // invalid token aanenkil unauthorized response return cheyyunnu
    return res.status(401).json({
      msg: "Invalid token"
    });
  }
};

// middleware export cheyyunnu vere files-il use cheyyan
module.exports = authmiddileware;