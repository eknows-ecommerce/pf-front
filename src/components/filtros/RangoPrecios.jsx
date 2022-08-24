/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setRangoPrecios, setPaginaActual } from 'features/reducers/librosSlice'

function RangoPrecios({ reset, setReset }) {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState({})
  const items = [
    {
      id: '1',
      min: 0,
      max: 10,
      moneda: '$',
    },
    {
      id: '2',
      min: 10,
      max: 20,
      moneda: '$',
    },
    {
      id: '3',
      min: 20,
      max: 50,
      moneda: '$',
    },
    {
      id: '4',
      min: 50,
      max: 100,
      moneda: '$',
    },
    {
      id: '5',
      min: 100,
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
      setRangoPrecios({})
      setSelected({})
      setReset(false)
    }
  }, [reset])

  useEffect(() => {
    let wherePrecios = {
      min: Infinity,
      max: -Infinity,
    }

    items.forEach(({ id, min, max }) => {
      if (selected[`precio${id}`]) {
        wherePrecios = {
          ...wherePrecios,
          min: Math.min(wherePrecios.min, min),
          max: Math.max(wherePrecios.max, max),
        }
      }
    })
    dispatch(
      setRangoPrecios({
        min: wherePrecios.min === Infinity ? 0 : wherePrecios.min,
        max: wherePrecios.max === -Infinity ? 9999 : wherePrecios.max,
      })
    )
    dispatch(setPaginaActual(1))
  }, [selected])

  return (
    <div className="px-5 py-6 space-y-2 cursor-default">
      {items.map(({ id, min, max, moneda }) => (
        <div key={crypto.randomUUID()} className="flex items-center">
          <input
            id={`precio${id}`}
            type="checkbox"
            name={`precio${id}`}
            className="w-5 h-5 border-gray-300 rounded cursor-pointer"
            onChange={handleChange}
            checked={selected[`precio${id}`]}
          />
          <label
            htmlFor={`precio${id}`}
            className="ml-3 text-sm font-medium text-blue-600 cursor-pointer"
          >
            {`${min} - ${max ?? '∞'} ${moneda}`}
          </label>
          <div />
        </div>
      ))}
    </div>
  )
}

export default RangoPrecios
