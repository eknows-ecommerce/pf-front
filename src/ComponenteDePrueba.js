import { useSelector, useDispatch } from 'react-redux'
import { cambiarCargando } from './features/reducers/categoriasSlice'
import { getCategorias } from './features/actions/categorias'

export default function ComponenteDePrueba() {
  const { cargandoCategorias } = useSelector((store) => store.categorias)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(cambiarCargando())}>
        Cambiar cargandoCategorias
      </button>

      {cargandoCategorias && <p>Categorias Cargadas</p>}

      <br />

      <button onClick={() => dispatch(getCategorias())}>
        Hacer GET request
      </button>
    </div>
  )
}
