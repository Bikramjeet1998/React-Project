import React from "react";
import "./Alert.css";

export default function Alert(props) {
  console.log(props);

  // let dataArray = props.dataArray;
  // let message = props.message;
  // console.log(dataArray);

  let { dataArray, dataObject, message, testFun } = props;
  // console.log(dataArray, dataObject, message, testFun);

  // testFun();
  // console.log(props.dataArray);
  // console.log(props.dataObject);
  // console.log(props.testFun);
  return (
    <div className="alert">
      <h1>{message}</h1>
      {props.children}
    </div>
  );
}
