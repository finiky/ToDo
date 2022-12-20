BEGIN TRANSACTION;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text,
    email text,
    passkey text
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    task text,
    todos_user_id INT REFERENCES users(id)
);

COMMIT;