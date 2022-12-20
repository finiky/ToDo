import React from "react";
import List from "./components/List";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
