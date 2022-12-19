import React from "react";
import List from "./components/List";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
