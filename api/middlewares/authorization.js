const jwt = require("jsonwebtoken");
const config = require("../config");
const checkJWT = async (request, response, next) => {
  const { token } = request.headers;
  if (!token) {
    return response.status(400).json({ message: "Login to continue" });
  }
  if (token) {
    jwt.verify(JSON.parse(token), config.secret, (error, decode) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return res.status(422).json({
            message: "Session expired. Login again to contiuue. ",
          });
        }
        return res.status(422).json({ message: "JWT Verification Issue." });
      }
      next();
    });
  }
};
module.exports = checkJWT;
