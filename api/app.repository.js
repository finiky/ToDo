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
    const { email, passkey } = request.params;
    const db = await get_db();
    if (!email || !passkey) {
      return response
        .status(400)
        .json({ message: "Please enter an email id and password to login" });
    }
    const user = await db.query(`SELECT * FROM users WHERE email = '${email}'`);
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
        .json({ message: "Incorrect email id or password." });
    }
    if (validatePassword) {
      const token = jwt.sign({ id: user.rows[0].id }, config.secret);
      return response.status(200).json({ token, ...user.rows[0] });
    }
  },
  createTask: async (request, response) => {
    const { id } = request.params;
    const { task } = request.body;
    const db = await get_db();
    await db.query(
      `INSERT INTO todos (todos_user_id, task) VALUES ($1, $2)`, [id, task]
    );
    const todo = await db.query(`SELECT * FROM todos WHERE task = $1`, [task]);
    if (todo.rows.length) {
      return response.status(201).json({ task: todo.rows[0].task });
    } else {
      return response.status(400).json({ message: "Error creating a todo" });
    }
  },
  // getTodos: async (request, response) => {
  //   const { id } = request.body;
  //   const db = await get_db();
  //   const todos = await db.query(
  //     `SELECT * FROM users LEFT JOIN todos ON users.id = todos.todos_user_id
  //     WHERE users.id = $1`,
  //     [id]
  //   );
  //   return response.status(200).send(todos.rows);
  // },
};
