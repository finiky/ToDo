import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ViewTasks = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/mytasks/${id}`);
    const data = await response.json();
    console.log(data);
    setTasks(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.task}</li>;
      })}
    </ul>
  );
};

export default ViewTasks;
