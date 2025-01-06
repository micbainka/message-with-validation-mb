import "./App.css";
import React, { useState } from "react";

function App() {
  const [showError, setShowError] = useState(false);
  const [noteValue, setNoteValue] = useState("");
  const characterLimit = 30;

  const handleChange = (event) => {
    setNoteValue(event.target.value);
    setShowError(event.target.value.length > characterLimit);
  };

  return (
    <div className="App">
      <textarea
        value={noteValue}
        onChange={handleChange}
        placeholder="Insert message"
      />
      {showError ? <div>Inserted text is too long!</div> : null}
    </div>
  );
}

export default App;
