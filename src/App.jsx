import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Alert from "./components/Alert/Alert";
import Test from "./Components/Test/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        Alert Massage Is
        <Alert />
      </div>
      <div>
        This is Text File
        <Test />
      </div>
      <h3>
        I'm Bikramjeet Singh And This is my first React project where i have
        Import Two componenets Alert Amd Test
      </h3>
    </>
  );
}

export default App;
