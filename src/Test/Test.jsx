import React from 'react'
import Message from '../components/Message/Message'
import "./Test.css"

export default function Test(props) {
  console.log(props);

  // let dataArray = props.dataArray;
  // let message = props.Message;
  // console.log(dataArray)

  let {dataArray,dataObj,Message,dataFunc} = props;
  // console.log(dataArray,dataObj,Message,dataFunc);
  dataFunc("This message is sent from child component: Test.jsx to parent component App.jsx")
  

  return (
    <div className='Test'>
      <h1>{Message}</h1>
      {props.children}
      <H1/>
    </div>
  );
}

export function H1 (){
  return (
    <h1>This is H1 Function in Test.jsx Componenet.</h1>
  );
}

export function H2 (){
  return (
    <h1>This is H2 Function in Test.jsx Componenet.</h1>
  );
}
