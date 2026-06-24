const jwt = require("jsonwebtoken");

const authmiddileware = async (req, res, next) => {
  console.log("AUTH MIDDLEWARE HIT");
  try {

    console.log("FULL HEADERS =", req.headers);
console.log("AUTH HEADER =", req.headers.authorization);
console.log("COOKIE TOKEN =", req.cookies?.token);

    let token = req.cookies?.token;

    if (!token && req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    console.log("TOKEN =", token);

    if (!token) {
      return res.status(401).json({
        msg: "No token found",
      });
    }

    const verifyToken = jwt.verify(
      token,
      process.env.JWT_SECRETKEY
    );

    req.user = verifyToken;

    next();

  } catch (err) {
    console.log(err);
    return res.status(401).json({
      msg: "Invalid token",
    });
  }
};

module.exports = authmiddileware;