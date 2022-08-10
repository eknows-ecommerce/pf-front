import { useState } from 'react'

function useSelect() {
  const [selected, setSelected] = useState([])

  const handleSelected = (e) => {
    const id = e.target.id
    setSelected([...selected, id])
  }

  const handleDeselected = (e) => {
    const id = e.target.id
    setSelected(selected.filter((item) => item !== id))
  }

  return {
    selected,
    handleSelected,
    handleDeselected,
  }
}

export default useSelect
