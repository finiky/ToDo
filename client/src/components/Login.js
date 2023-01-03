import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/login/${email}/${passkey}`
    );
    const data = await response.json();
    if (response.status === 200) {
      const { id, token } = await response.json();
      localStorage.setItem("x-auth-token", JSON.stringify(token));
      localStorage.setItem("id", JSON.stringify(id));
      navigate("/");
    }
    if (response.status !== 200) {
      setMessage(data.message);
      setError(true);
    }
  };
  const retryLogin = () => {
    setMessage("");
    setEmail("");
    setPasskey("");
    setError(false);
  };
  if (!error) {
    return (
      <div>
        <h1>Login to Continue</h1>
        <form onSubmit={handleSubmit} method="POST">
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
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p>{message}</p>
        <div>
          <Link to="/login" onClick={retryLogin}>
            Retry Login
          </Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
};

export default Login;
