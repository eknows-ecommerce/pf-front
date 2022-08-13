/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setRangoPrecios } from 'features/reducers/librosSlice'

function RangoPrecios({ reset, setReset }) {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState({})
  const items = [
    {
      id: '1',
      precioMin: 0,
      precioMax: 10,
      moneda: '$',
    },
    {
      id: '2',
      precioMin: 10,
      precioMax: 20,
      moneda: '$',
    },
    {
      id: '3',
      precioMin: 20,
      precioMax: 50,
      moneda: '$',
    },
    {
      id: '4',

      precioMin: 50,
      precioMax: 100,
      moneda: '$',
    },
    {
      id: '5',
      precioMin: 100,
      precioMax: +Infinity,
      moneda: '$',
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
      setRangoPrecios('precioMin&precioMax')
      setSelected({})
      setReset(false)
    }
  }, [reset])

  useEffect(() => {
    let query = ''
    let precioMin = []
    let precioMax = []

    items.forEach((element) => {
      if (selected[`rangoPrecios${element.id}`]) {
        precioMin.push(element.precioMin)
        precioMax.push(element.precioMax)
      }
    })

    if (precioMin.length > 0) {
      precioMin = Math.min(...precioMin)
      query += `precioMin=${precioMin}`
      if (precioMax.at(-1) !== Infinity) {
        precioMax = Math.max(...precioMax)
        query += `&precioMax=${precioMax}`
      }
    }
    dispatch(setRangoPrecios(query))
  }, [selected])

  return (
    <div className="px-5 py-6 space-y-2">
      {items.map(({ id, precioMin, precioMax, moneda }) => (
        <div key={crypto.randomUUID()} className="flex items-center">
          <input
            id={`rangoPrecios${id}`}
            type="checkbox"
            name={`rangoPrecios${id}`}
            className="w-5 h-5 border-gray-300 rounded"
            onChange={handleChange}
            checked={selected[`rangoPrecios${id}`]}
          />
          <label
            htmlFor={`rangoPrecios${id}`}
            className="ml-3 text-sm font-medium"
          >
            {`${precioMin} - ${
              precioMax === Infinity ? 'Max' : precioMax
            } ${moneda}`}
          </label>
          <div />
        </div>
      ))}
    </div>
  )
}

export default RangoPrecios
