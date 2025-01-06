import "./App.css";
import React, { useState } from "react";

function App() {
  const [searchMessage, setSearchMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(searchMessage);
  };

  return (
    <div className="App">
Text
    </div>
  );
}

export default App;
