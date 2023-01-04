import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Todos from "./components/Todos";
import About from "./components/About";
import LoginButton from "./components/LoginButton";
import SignupButton from "./components/SignupButton";
import AboutButton from "./components/AboutButton";
import MyTodosButton from "./components/MyTodosButton";

import styles from "./components/App.module.css";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <AboutButton />
        <MyTodosButton />
        <LoginButton />
        <SignupButton />
      </div>
      <Routes>
        <Route exact path="/" element={<Todos />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
