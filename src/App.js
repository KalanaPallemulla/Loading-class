import React from "react";
import "./App.css";
import LoadingIcon from "./LoadingIcon";
function App() {
  function handleClick() {
    document.body.classList.add("loading");

    // perform some asynchronous operation here
    setTimeout(() => {
      document.body.classList.remove("loading");
    }, 3000); // simulate a 3-second delay
  }

  return (
    <div>
      <button onClick={handleClick}>Perform Asynchronous Operation</button>
      <p></p>
      {/* <LoadingIcon /> */}
    </div>
  );
}

export default App;
