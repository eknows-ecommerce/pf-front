/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setFormatos, setPaginaActual } from 'features/reducers/librosSlice'

function RangoPrecios({ reset, setReset }) {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState({})
  const items = [
    {
      id: '1',
      nombre: 'Físico',
    },
    {
      id: '2',
      nombre: 'Ebook',
    },
    {
      id: '3',
      nombre: 'Audio Libro',
    },
  ]

  const handleChange = (e) => {
    setSelected({
      ...selected,
      [e.target.id]: e.target.checked,
    })
  }

  useEffect(() => {
    if (reset) {
      setFormatos([])
      setSelected({})
      setReset(false)
    }
  }, [reset])

  useEffect(() => {
    let whereFormatos = []
    items.forEach(({ id }) => {
      if (selected[`formato${id}`]) {
        whereFormatos = [...whereFormatos, Number(id)]
      }
    })
    dispatch(setFormatos(whereFormatos))
    dispatch(setPaginaActual(1))
  }, [selected])

  return (
    <div className="px-5 py-6 space-y-2 cursor-default">
      {items.map(({ id, nombre }) => (
        <div key={crypto.randomUUID()} className="flex items-center">
          <input
            id={`formato${id}`}
            type="checkbox"
            name={`formato${id}`}
            className="w-5 h-5 border-gray-300 rounded cursor-pointer"
            onChange={handleChange}
            checked={selected[`formato${id}`]}
          />
          <label
            htmlFor={`formato${id}`}
            className="ml-3 text-sm font-medium text-blue-600 cursor-pointer"
          >
            {nombre}
          </label>
          <div />
        </div>
      ))}
    </div>
  )
}

export default RangoPrecios
