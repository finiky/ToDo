import { useNavigate } from "react-router-dom";
const SignupButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <button id="signup" type="button" onClick={handleClick}>
      Signup
    </button>
  );
};
export default SignupButton;
