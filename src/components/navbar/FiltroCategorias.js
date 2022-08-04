import { useState } from 'react'
import { useSelector } from 'react-redux'

function FiltroCategorias() {
  const [selected, setSelected] = useState('')
  const { categorias } = useSelector((store) => store.categoriasStore)

  const categorySelected = (e) => {
    const value = e.taget.value
    setSelected(value)
  }

  return (
    <div>
      {/* Por ahora usamos un <select> para ver la funcionalidad, pero cuando empezemos con CSS podemos cambiar la estructura */}
      <select
        name="categorias"
        id="categoria-select"
        onChange={categorySelected}
      >
        <option value="">Todos</option>
        {categorias.map((categoria) => (
          <option key={categoria.nombre} value={categoria.nombre}>
            {categoria.nombre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FiltroCategorias
