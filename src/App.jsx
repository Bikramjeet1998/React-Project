import React from "react";
import "./App.css";
import UseState from "./components/Hooks/UseState";

function App() {
    console.log("App.jsx --- Parent Component");
    return (
    <>
      <div>
        <h1>This working 👌</h1>
        <UseState />
      </div>
    </>
  );
}
export default App;
