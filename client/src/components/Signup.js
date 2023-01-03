import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({ username, email, passkey: password }),
    });
    const data = await response.json();
    if (response.status === 201) {
      setStatus(true);
    } else {
      setMessage(data.message);
      setError(true);
    }
  };

  const retrySignup = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setMessage("");
    setStatus(false);
    setError(false);
  };

  if (status) {
    return (
      <div>
        <h1>Registration Successful</h1>
        <Link to="/login">Login to continue</Link>
      </div>
    );
  }

  if (!error) {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{message}</p>
        <Link to="/signup" onClick={retrySignup}>
          Retry Sign Up
        </Link>
      </div>
    );
  }
};

export default Signup;
