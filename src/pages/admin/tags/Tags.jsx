import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useSearch from 'hooks/useSearch'

import { create, deleteById, update, getAll } from 'features/actions/tags'

import Item from './Item'
import CrearItemModal from '../CrearItemModal'
import EliminarItemModal from '../EliminarItemModal'
import EditarItemModal from '../EditarItemModal'
import SearchPanelAdmin from '../SearchPanelAdmin'

export default function Tags() {
  const { tags } = useSelector(({ tagsStore }) => tagsStore)

  const [eliminarItemModal, setEliminarItemModal] = useState(false)
  const [crearItemModal, setCrearItemModal] = useState(false)
  const [editarItemModal, setEditarItemModal] = useState(false)

  const [tagSeleccionado, setTagSeleccionado] = useState({})
  const [valorNuevoItem, setValorNuevoItem] = useState('')
  const { search, handleSearch } = useSearch()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(`nombre=${search}`))
  }, [dispatch, search])

  const seleccionarTag = (tag) => {
    setTagSeleccionado(tag)
    setEliminarItemModal(true)
  }

  const editarTag = (tag) => {
    alert('Ingresar nombre de tag')
    setTagSeleccionado(tag)
    setValorNuevoItem(tag.nombre)
    setEditarItemModal(true)
  }

  const editarItem = () => {
    dispatch(
      update({
        id: tagSeleccionado.id,
        nombre: valorNuevoItem,
      })
    )
    setTagSeleccionado({})
    setEditarItemModal(false)
  }

  const eliminarTag = (tag) => {
    setTagSeleccionado(tag)
    setEliminarItemModal(true)
  }

  const eliminarItem = () => {
    dispatch(deleteById(tagSeleccionado.id))
    setTagSeleccionado({})
    setEliminarItemModal(false)
  }

  const crearItem = () => {
    if (!valorNuevoItem) {
      alert('Ingresar nombre de tag')
    } else {
      dispatch(create({ nombre: valorNuevoItem }))
      setValorNuevoItem('')
      setCrearItemModal(false)
    }
  }

  return (
    <>
      {eliminarItemModal && (
        <EliminarItemModal
          setEliminarItemModal={setEliminarItemModal}
          eliminarItem={eliminarItem}
          item={tagSeleccionado.nombre}
        />
      )}
      {crearItemModal && (
        <CrearItemModal
          setCrearItemModal={setCrearItemModal}
          valorNuevoItem={valorNuevoItem}
          setValorNuevoItem={setValorNuevoItem}
          crearItem={crearItem}
          tipo="Tag"
        />
      )}
      {editarItemModal && (
        <EditarItemModal
          setEditarItemModal={setEditarItemModal}
          valorNuevoItem={valorNuevoItem}
          setValorNuevoItem={setValorNuevoItem}
          editarItem={editarItem}
          tipo="Tag"
        />
      )}
      <div className="overflow-x-auto py-2">
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Tags
              </p>
              <div>
                <button
                  onClick={() => setCrearItemModal(true)}
                  className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-center space-x-2 justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                >
                  <p className="text-sm font-medium leading-none text-white">
                    Nuevo Tag
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <SearchPanelAdmin
              search={search}
              handleSearch={handleSearch}
              placeholder="Buscar por nombre"
            />
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-lg leading-none text-white bg-neutral-800">
                  <th className="font-normal text-left pl-20">ID</th>
                  <th className="font-normal text-left pl-4">Tag</th>
                  <th className="font-normal text-left pl-4"></th>
                </tr>
              </thead>
              <tbody className="w-full">
                {tags?.map((tag) => (
                  <Item
                    key={tag.id}
                    seleccionarTag={seleccionarTag}
                    eliminarTag={eliminarTag}
                    editarTag={editarTag}
                    {...tag}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
