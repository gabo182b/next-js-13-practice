'use client'
// the goal of use client is to use it in the smallest component which need it

import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}
