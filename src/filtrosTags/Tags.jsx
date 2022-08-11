import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../features/actions/libros'
import Tag from './Tag'

export default function Tags({ tags }) {
  const [tagSelect, setTagSelect] = useState([])
  const dispatch = useDispatch()
  function handleClick(e) {
    setTagSelect([e])
  }
  function handleButton() {
    dispatch(getAll(`tag=${tagSelect[0]}`))
  }
  return (
    <div className="px-5 py-6 space-y-2">
      {tags?.map((t) => (
        <Tag handleClick={handleClick} nombre={t.nombre} id={t.id} />
      ))}
      <button
        onClick={handleButton}
        type="button"
        className="text-xs text-gray-500 underline"
      >
        Seleccionar filtro
      </button>
    </div>
  )
}
