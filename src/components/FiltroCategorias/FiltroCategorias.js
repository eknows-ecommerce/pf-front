import { useSelector } from 'react-redux'
import useSelect from '../../hooks/useSelect'

function FiltroCategorias({ lista }) {
  const { selected, handleSelected } = useSelect()
  return (
    <div>
      <select name="categorias" id="categoria-select" onChange={handleSelected}>
        <option value="">Todos</option>
        {lista.map((item) => (
          <option key={item.nombre} value={item.nombre}>
            {item.nombre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FiltroCategorias
