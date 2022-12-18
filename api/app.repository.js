const db = require("./db");
const bcrypt = require("bcrypt");
module.exports = {
  new_user: async (request, response) => {
    try {
      const { email, username, passkey } = request.body;
      const user = await db.query(`SELECT email FROM users WHERE email = $1`, [
        email,
      ]);
      if (user.rows.length) {
        const error = new Error("User with email already exists");
        error.status = 400;
        throw error;
      }
      if (!user.rows.length) {
        const hashedKey = bcrypt.hashSync(passkey, 10);
        await db.query(
          `INSERT INTO users (email, username, passkey) VALUES ($1, $2, $3)`,
          [email, username, hashedKey]
        );
        return response
          .status(201)
          .json({ message: "Registration Successful" });
      }
    } catch (error) {
      throw Error(error);
    }
  },
};
