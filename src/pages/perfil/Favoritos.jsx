import { getByUser } from 'features/actions/favoritos'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemFav from './ItemFav'

function Favoritos() {
  const favoritos = useSelector(
    ({ favoritosStore }) => favoritosStore.favoritos
  )
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getByUser(usuario.id))
  }, [])

  return (
    <div className=" h-full sm:px-2">
      <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-16 w-full text-sm leading-none text-gray-800">
              <th className="font-normal text-center">Id</th>
              <th className="font-normal text-center">Titulo</th>
              <th className="font-normal text-center">Autor</th>
              <th className="font-normal text-left"></th>
            </tr>
          </thead>
          <tbody className="w-full">
            {favoritos.length > 0 &&
              favoritos?.map((fav) => (
                <ItemFav
                  key={crypto.randomUUID()}
                  id={fav.id}
                  titulo={fav.titulo}
                  autor={fav.autor}
                  portada={fav.portada}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Favoritos
