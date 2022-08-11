import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/actions/libros'
import Categoria from './Categoria'

export default function Categorias({ categorias }) {
  const [catSelect, setCatSelect] = useState([])
  const dispatch = useDispatch()
  function handleClick(e) {
    setCatSelect([e])
  }
  function handleButton() {
    dispatch(getAll(`categoria=${catSelect[0]}`))
  }
  return (
    <div className="px-5 py-6 space-y-2">
      {categorias?.map((cat) => (
        <Categoria handleClick={handleClick} nombre={cat.nombre} id={cat.id} />
      ))}
      <button
        type="button"
        onClick={handleButton}
        className="text-xs text-gray-500 underline"
      >
        Seleccionar Categorias
      </button>
    </div>
  )
}
