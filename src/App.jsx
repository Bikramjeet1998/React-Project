import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Alert from "./components/Alert/Alert";
import Test from "./Components/Test/Test";

function App() {
  const [count, setCount] = useState(0);

  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let testObj = {
    name: "Jaskaran singh",
  };

  function testFunction() {
    console.log("This function is inside App.js Component");
  }

  return (
    <>
      <div>
        <Alert
          message="This is from prop message"
          dataArray={testArray}
          dataObject={testObj}
          testFun={testFunction}
        >
          <Test />
        </Alert>
      </div>
    </>
  );
}

export default App;
