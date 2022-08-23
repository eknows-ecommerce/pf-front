import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAll, update } from 'features/actions/usuarios'

import Paginacion from 'components/Paginacion/Paginacion'
import usePaginacion from 'hooks/usePaginacion'
import useSearch from 'hooks/useSearch'

import Item from './Item'
import SearchPanelAdmin from '../SearchPanelAdmin'
import EditarModal from './EditarModal'

const initialState = {
  id: null,
  name: '',
  rol: '',
  estado: '',
}

function Usuarios() {
  const [usuario, setUsuario] = useState(initialState)
  const [showEditarModal, setShowEditarModal] = useState(false)

  const { usuarios } = useSelector(({ usuariosStore }) => usuariosStore)
  const { search, handleSearch } = useSearch()
  // const { paginas, paginaAnterior, paginaSiguiente, handleTotal } =
  //   usePaginacion()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(`?nickname=${search}`))
  }, [dispatch, search])

  // useEffect(() => {
  //   handleTotal(usuarios.length)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [paginas.totalPages])

  const handleEditarUsuario = (id, name, rol, isBan) => {
    setUsuario({ id, name, rol, isBan })
    setShowEditarModal(true)
  }

  return (
    <>
      {showEditarModal && (
        <EditarModal
          setShowEditarModal={setShowEditarModal}
          usuario={usuario}
          setUsuario={setUsuario}
        />
      )}
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
            <SearchPanelAdmin
              search={search}
              handleSearch={handleSearch}
              placeholder="Buscar por nickname"
            />
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-10">ID</th>
                  <th className="font-normal text-left pl-20">Nombre</th>
                  <th className="font-normal text-left pl-20">Email</th>
                  <th className="font-normal text-left pl-10">Estado</th>
                  <th className="font-normal text-left pl-10">Rol</th>
                  <th className="font-normal text-left pl-10"></th>
                </tr>
              </thead>
              <tbody className="w-full">
                {usuarios?.map((usuario) => (
                  <Item
                    key={crypto.randomUUID()}
                    handleEditarUsuario={handleEditarUsuario}
                    {...usuario}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="my-5">
        {paginas.totalPages && (
          <Paginacion
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          paginas={paginas}
          />
          )}
        </div> */}
      </div>
    </>
  )
}

export default Usuarios
