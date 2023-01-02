import { useNavigate } from "react-router-dom";
const AboutButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <button type="button" onClick={handleClick}>
      About
    </button>
  );
};

export default AboutButton;
