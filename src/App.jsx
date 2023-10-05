import React from "react";
import "./App.css";
// import Message from "./components/Message/Message";
// import Alert from "./components/Alert/Alert";
// import Test, { H1, H2 } from "./Test";
// import Mywork from "./practice/Mywork/Mywork";
import Mytask from "./Mytask/Mytask";

function App() {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let testObj = {
    name: "Jaskaran",
  };

  function testFunction(message) {
    console.log("This function is inside App.js Component");
    console.log(message);
  }

  function MyFunc(event) {
    console.log(event.target.value)
  }

  return (
    <>
      <div>
        <h1>This working 👌</h1>
        {/* <Message/> */}
        {/* <Alert></Alert> */}
        {/* <Mywork/> */}
        {/* <Test
          Message={"This is for testing & This is form props message"}
          dataArray={testArray}
          dataObj={testObj}
          dataFunc={testFunction}
        > 
       <Mywork/>
        </Test> */}
        <Mytask 
        NewFunc = {MyFunc}
        />
      </div>
    </>
  );
}
export default App;
