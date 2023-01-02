import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import LoginButton from "./components/LoginButton";
import SignupButton from "./components/SignupButton";
import AboutButton from "./components/AboutButton";
import HomeButton from "./components/HomeButton";

import styles from "./components/App.module.css";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <AboutButton />
        <HomeButton />
        <LoginButton />
        <SignupButton />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
