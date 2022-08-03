import {
  getAll,
  getById,
  create,
  update,
  deleteById,
} from './features/actions/categorias'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function PruebaCategoriasReducer() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  }, [])

  return (
    <div>
      <h1>Categorias Reducer</h1>
      <p>
        Ver el componente PruebaCategoriasReducer para modificar los valores de
        cada accion
      </p>
      <button
        onClick={() =>
          dispatch(
            create({
              nombre: 'PRUEsdfsdasdasBA',
              miniatura: 'miniaturdsda.jpdsg',
            })
          )
        }
      >
        create categoria
      </button>

      <button onClick={() => dispatch(getById(1))}>get categoria by Id</button>

      <button
        onClick={() =>
          dispatch(
            update({
              id: 1,
              categoria: {
                nombre: 'categoria nueva',
                miniatura: 'UPDATED.jpdsg',
              },
            })
          )
        }
      >
        update categoria
      </button>

      <button onClick={() => dispatch(deleteById(1))}>delete categoria</button>
    </div>
  )
}

export default PruebaCategoriasReducer
