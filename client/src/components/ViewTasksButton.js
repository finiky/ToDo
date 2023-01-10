import { useNavigate } from "react-router-dom";
const MyTasksButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const id = localStorage.getItem("id");
    if (id) {
      navigate(`/mytasks/${id}`);
    }
  };
  return <button onClick={handleClick}>My Tasks</button>;
};

export default MyTasksButton;
