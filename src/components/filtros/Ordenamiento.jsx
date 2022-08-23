import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setOrden } from 'features/reducers/librosSlice'

function Ordenamiento({ handleCurrent }) {
  const dispatch = useDispatch()
  const [ordenar, setOrdenar] = useState('ordenar')

  const items = [
    {
      id: '1',
      valor: 'titulo',
      dir: 'asc',
    },
    {
      id: '2',
      valor: 'titulo',
      dir: 'desc',
    },
    {
      id: '3',
      valor: 'precio',
      dir: 'asc',
    },
    {
      id: '4',
      valor: 'precio',
      dir: 'desc',
    },
  ]

  const handleOrder = (e) => {
    setOrdenar(e.target.value)
  }

  useEffect(() => {
    if (ordenar !== 'ordenar') {
      dispatch(
        setOrden({
          valor: ordenar.slice(0, 6),
          dir: ordenar.slice(9),
        })
      )
    }
    handleCurrent(1)
  }, [ordenar])

  return (
    <div className="ml-2 bg-gray-100">
      <select
        id="SortBy"
        name="sort_by"
        className="text-sm bg-gray-200 border-gray-200 font-medium rounded px-2 uppercase shadow-sm"
        value={ordenar}
        onChange={handleOrder}
      >
        <option className="text-xs font-bold text-blue-500">ordenar</option>
        {items.map(({ valor, dir }) => (
          <option
            key={crypto.randomUUID()}
            className="text-xs font-bold text-blue-500"
          >
            {valor} - {dir}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Ordenamiento
