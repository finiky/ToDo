import { useState, useEffect } from "react";
const List = () => {
  const [toDos, setTodos] = useState("");
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000");
    const data = await response.json();
    setTodos(data.message);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <h1>{toDos}</h1>;
};

export default List;
