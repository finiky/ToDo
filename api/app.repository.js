const get_db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./config");
module.exports = {
  signup: async (request, response) => {
    const db = await get_db();
    const { email, username, passkey } = request.body;
    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    if (user.rows.length) {
      return response
        .status(400)
        .json({ message: "User with the provided email id already exists." });
    }
    if (!user.rows.length) {
      const hashedKey = bcrypt.hashSync(passkey, 10);
      await db.query(
        `INSERT INTO users (email, username, passkey) VALUES ($1, $2, $3)`,
        [email, username, hashedKey]
      );
      return response.status(201).json({ message: "Registration Successful" });
    }
  },
  login: async (request, response) => {
    const { email, passkey } = request.body;
    const db = await get_db();
    if (!email || !passkey) {
      return response
        .status(400)
        .json({ message: "Please enter an email and password to login" });
    }
    const user = await db.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    if (!user.rows[0]) {
      return response
        .status(400)
        .json({ message: "User with the provided email id does not exists." });
    }
    const validatePassword = await bcrypt.compare(
      passkey,
      user.rows[0].passkey
    );
    if (!validatePassword) {
      return response
        .status(400)
        .json({ message: "Invalid email id or password." });
    }
    if (validatePassword) {
      const token = jwt.sign({ id: user.rows[0].id }, config.secret);
      return response.status(200).json({ token, ...user.rows[0] });
    }
  },
};
