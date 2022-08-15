import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Paginacion from 'components/paginacion/Paginacion'
import usePaginacion from 'hooks/usePaginacion'

import Item from './Item'
import SearchBar from '../SearchBar'

function Usuarios() {
  const { usuarios } = useSelector(({ usuariosStore }) => usuariosStore)
  const { paginas, paginaAnterior, paginaSiguiente, handleTotal } =
    usePaginacion()

  useEffect(() => {
    handleTotal(usuarios.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginas.totalPages])

  return (
    <div className="overflow-x-auto xl:px-20 py-2">
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Usuarios
            </p>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <SearchBar />
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-20">Nombre</th>
                <th className="font-normal text-left pl-20">Email</th>
                <th className="font-normal text-left pl-10">Estado</th>
                <th className="font-normal text-left pl-10">Rol</th>
                <th className="font-normal text-left pl-10">ID</th>
                <th className="font-normal text-left pl-10"></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {usuarios?.map((usuario) => (
                <Item key={usuario.id} {...usuario} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-5">
        {paginas.totalPages && (
          <Paginacion
            paginaAnterior={paginaAnterior}
            paginaSiguiente={paginaSiguiente}
            paginas={paginas}
          />
        )}
      </div>
    </div>
  )
}

export default Usuarios
