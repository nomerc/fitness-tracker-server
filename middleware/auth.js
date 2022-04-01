const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

//check if req has valid JWT access token
let authenticate = (req, res, next) => {
  let token = req.header("x-access-token");
  //verify JWT
  jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
    if (err) {
      res.status(401).send(err);
    } else {
      //jwt is valid
      req.user_id = decoded._id;
      next();
    }
  });
};

module.exports = authenticate;
