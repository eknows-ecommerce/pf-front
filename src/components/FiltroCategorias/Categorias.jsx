/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../features/actions/libros'
import { getAll as getAllCat } from '../../features/actions/categorias'
import Categoria from './Categoria'
import { setCategorias } from '../../features/reducers/librosSlice'

export default function Categorias() {
  const [selected, setSelected] = useState({})
  // const [catSelect, setCatSelect] = useState([])
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCat())
  }, [])

  function handleClick(e) {
    setSelected({
      ...selected,
      [e.target.id]: e.target.checked,
    })
  }

  useEffect(() => {
    let query = 'categorias='
    for (const key in selected) {
      if (selected[key]) {
        query += key + ','
      }
    }
    query = query.slice(0, -1)
    dispatch(setCategorias(query))
  }, [selected])

  return (
    <div className="px-5 py-6 space-y-2">
      {categorias &&
        categorias?.map((cat) => (
          <Categoria
            key={crypto.randomUUID()}
            nombre={cat.nombre}
            id={cat.id}
            handleClick={handleClick}
            selected={selected[cat.id]}
          />
        ))}
    </div>
  )
}
