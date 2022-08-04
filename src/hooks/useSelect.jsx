import { useState } from 'react'

function useSelect(initialState = 'todos') {
  const [selected, setSelected] = useState(initialState)

  const handleSelected = (e) => {
    const value = e.target.value
    setSelected(value)
  }

  return {
    selected,
    handleSelected,
  }
}

export default useSelect
