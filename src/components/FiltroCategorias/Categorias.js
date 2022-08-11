import React, { useEffect, useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../features/actions/libros'
import { getAll as getallcat } from '../../features/actions/categorias'

import Categoria from './Categoria'

export default function Categorias() {
  const [catSelect, setCatSelect] = useState([])
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)
  console.log(categorias, 'categorias')
  const dispatch = useDispatch()
  function handleClick(e) {
    setCatSelect([e])
  }
  function handleButton() {
    dispatch(getAll(`categoria=${catSelect[0]}`))
  }
  // useEffect(() => {
  //   dispatch(getallcat())
  // })
  return (
    <div className="px-5 py-6 space-y-2">
      {categorias.length > 0 &&
        categorias?.map((item) => (
          <Categoria
            key={crypto.randomUUID()}
            id={item?.id}
            nombre={item?.nombre}
            handleClick={handleClick}
          />
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
