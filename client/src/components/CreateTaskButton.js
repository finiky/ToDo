import {useNavigate } from "react-router-dom";
const CreateTaskButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <button type="button" onClick={handleClick}>
      Schedule Task
    </button>
  );
};

export default CreateTaskButton;
