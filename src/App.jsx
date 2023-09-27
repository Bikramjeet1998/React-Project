import React from 'react'
import "./App.css";
import Message from './components/Message/Message';
import Alert from "./components/Alert/Alert";

export default function App() {
  return (
    <div>
      <h1>This working 👌</h1>
      <Message/>
      <Alert></Alert>
    </div>
  )
}
