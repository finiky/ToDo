import React from 'react';
import './App.css';

function App() {
  const h1 = <h1>Hello React</h1>;
  const h2 = React.createElement("h2", {}, "Hello Again");
  return (
    <div className="App">
      <header className="App-header">
        {h1}
        {h2}
      </header>
    </div>
  );
}

export default App;
