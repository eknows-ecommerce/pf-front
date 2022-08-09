import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../features/actions/libros'
import { getAll as getAllCat, getById } from '../../features/actions/categorias'
import Categoria from './Categoria'

export default function Categorias() {
  const [catSelect, setCatSelect] = useState([])
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCat())
  }, [])

  function handleClick(e) {
    setCatSelect([e])
  }
  function handleButton() {
    dispatch(getAll(`categoria=${catSelect[0]}`))
  }
  return (
    <div className="px-5 py-6 space-y-2">
      {categorias?.map((cat) => (
        <Categoria
          key={cat.id}
          handleClick={handleClick}
          nombre={cat.nombre}
          id={cat.id}
        />
      ))}
    </div>
  )
}
