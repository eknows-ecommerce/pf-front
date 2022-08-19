import { useSelector } from 'react-redux'
import ItemFav from './ItemFav'

function Favoritos() {
  const favoritos = useSelector(
    ({ favoritosStore }) => favoritosStore.favoritos
  )
  return (
    <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5">
      {/* <SearchPanelAdmin
     search={search}
     handleSearch={handleSearch}
     placeholder="Buscar por nombre"
   /> */}
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="h-16 w-full text-lg leading-none text-white bg-black">
            <th className="font-normal text-center">ID</th>
            <th className="font-normal text-left pl-4">TITULO</th>
            <th className="font-normal text-left pl-4">AUTOR</th>
            <th className="font-normal text-left pl-4"></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {favoritos.length > 0 &&
            favoritos?.map((fav) => (
              <ItemFav
                key={crypto.randomUUID()}
                //   eliminarCategoria={eliminarCategoria}
                //   editarCategoria={editarCategoria}
                id={fav.id}
                titulo={fav.titulo}
                autor={fav.autor}
                portada={fav.portada}
              />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Favoritos
