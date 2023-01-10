import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreateTask from "./components/CreateTask";
import ViewTasks from "./components/ViewTasks";
import About from "./components/About";
import LoginButton from "./components/LoginButton";
import SignupButton from "./components/SignupButton";
import AboutButton from "./components/AboutButton";
import CreateTaskButton from "./components/CreateTaskButton";
import MyTasksButton from "./components/ViewTasksButton";
import styles from "./components/App.module.css";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <AboutButton />
        <CreateTaskButton />
        <MyTasksButton />
        <LoginButton />
        <SignupButton />
      </div>
      <Routes>
        <Route exact path="/" element={<CreateTask />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/mytasks/:id" element={<ViewTasks />} />
      </Routes>
    </div>
  );
}

export default App;
