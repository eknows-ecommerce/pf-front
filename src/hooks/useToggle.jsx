import { useState } from 'react'

function useToggle(initialState = false) {
  const [toggle, setToggle] = useState(initialState)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return {
    toggle,
    handleToggle,
  }
}

export default useToggle
