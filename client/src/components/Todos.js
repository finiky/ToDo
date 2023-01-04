import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Todos.module.css";

const Todos = () => {
  const [task, setTask] = useState("");
  const token = localStorage.getItem("x-auth-token");
  const id = localStorage.getItem("id");
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/${id}`, {
      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
        token: token,
      },
      body: JSON.stringify({ task }),
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <div>
      <h1 className={styles.h1}>Scheduler</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="task">Enter Task</label>
          <input
            id="task"
            type="text"
            onChange={(e) => setTask(e.target.value)}
            required
          />
          <button type="submit">Schedule Task</button>
        </form>
      </div>
    </div>
  );
};
export default Todos;
