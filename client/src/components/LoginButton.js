import { useNavigate } from "react-router-dom";
const LoginButton = () => {
  
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if(e.target.innerText === "Logout") {
      localStorage.clear();
    }  
    navigate("/login");
  };
  return (
    <button id="login" type="button" onClick={ (e) => handleClick(e)}>
      {localStorage.getItem("x-auth-token") ? `Logout` : `Login`}
    </button>
  );
};

export default LoginButton;
