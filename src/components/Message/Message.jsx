import React from 'react'
import "./Message.css"

export default function Message() {
    let name = "Karandeep Singh";
  return (
    <div>
      <p>This is a message component!</p>
      <p>{name} 🙌</p>
    </div>
  )
}
