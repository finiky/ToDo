import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [passkey, setPasskey] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/login/${email}/${passkey}`
    );
    if (response.status === 200) {
      const { id, token } = await response.json();
      localStorage.setItem("x-auth-token", JSON.stringify(token));
      localStorage.setItem("id", JSON.stringify(id));
      navigate("/");
    } 
    if(response.status !== 200) {
      alert("Error Logging In. Please try again")
    }
  };
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
};

export default Login;
