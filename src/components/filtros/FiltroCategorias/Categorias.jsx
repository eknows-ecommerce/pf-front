/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getAll } from '../../features/actions/libros'
import { getAll as getAllCat } from 'features/actions/categorias'
import Categoria from './Categoria'
import { setCategorias } from 'features/reducers/librosSlice'

export default function Categorias({ reset, setReset, handleCurrent }) {
  const [selected, setSelected] = useState({})
  const { categorias } = useSelector(({ categoriasStore }) => categoriasStore)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCat())
  }, [])

  useEffect(() => {
    if (reset) {
      setCategorias([])
      setSelected({})
      setReset(false)
    }
  }, [reset])

  const handleClick = (e) => {
    setSelected({
      ...selected,
      [e.target.id]: e.target.checked,
    })
  }

  useEffect(() => {
    let whereCategorias = []
    for (const key in selected) {
      if (selected[key]) whereCategorias.push(Number(key.slice(3)))
    }
    dispatch(setCategorias(whereCategorias))
    handleCurrent(1)
  }, [selected])

  return (
    <div className="px-5 py-6 space-y-2 cursor-default">
      {categorias &&
        categorias?.map(({ id, nombre }) => (
          <Categoria
            key={crypto.randomUUID()}
            nombre={nombre}
            id={id}
            handleClick={handleClick}
            selected={selected[`cat${id}`]}
          />
        ))}
    </div>
  )
}
