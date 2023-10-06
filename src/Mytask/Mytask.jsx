import React from 'react'

export default function Mytask({NewFunc}) {
  return (
    <div>
      <input onChange={(event) => NewFunc(event)} />
    </div>
  )
}
