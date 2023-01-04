import {useNavigate } from "react-router-dom";
const MyTodosButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <button type="button" onClick={handleClick}>
      My Todos
    </button>
  );
};

export default MyTodosButton;
