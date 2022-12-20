const get_db = require("./db");
const bcrypt = require("bcrypt");
module.exports = {
  new_user: async (request, response) => {
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
};
