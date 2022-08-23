/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useAuth0 } from '@auth0/auth0-react'

import Swal from 'sweetalert2'

import CardLibro from 'components/cards/CardLibro'
import Paginacion from 'components/Paginacion/Paginacion'
import Filtros from 'components/filtros/Filtros'

import { getAll } from 'features/actions/libros'
import { getByUser } from 'features/actions/favoritos'

import { getByNickname } from 'features/actions/usuarios'

import usePaginacion from 'hooks/usePaginacion'
import Ordenamiento from 'components/filtros/Ordenamiento'

function Home() {
  const { user } = useAuth0()

  const [listaCarrito, setListaCarrito] = useState(
    JSON.parse(localStorage.getItem('carrito')) ?? []
  )
  const dispatch = useDispatch()

  const {
    libros,
    count,
    search,
    categorias,
    tags,
    formatos,
    rangoPrecios,
    orden,
    buscarPor,
    limit,
  } = useSelector(({ librosStore }) => librosStore)

  const [ordenar, setOrdenar] = useState({})

  const { favoritos } = useSelector(({ favoritosStore }) => favoritosStore)
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  const { paginado, handlePrevius, handleCurrent, handleNext, handleTotal } =
    usePaginacion()

  // useEffect(() => {
  //   dispatch(getByNickname(user))
  // }, [getByNickname, user])

  // useEffect(() => {
  //   if (usuario !== undefined) dispatch(getByUser(usuario.id))
  // }, [usuario])

  useEffect(() => {
    handleTotal(count)
  }, [count])

  useEffect(() => {
    let query = ''

    if (categorias.length > 0) {
      query += `categorias=${JSON.stringify(categorias)}&`
    }
    if (tags.length > 0) {
      query += `tags=${JSON.stringify(tags)}&`
    }

    if (formatos.length > 0) {
      query += `formatos=${JSON.stringify(formatos)}&`
    }

    if (rangoPrecios) {
      query += `precios=${JSON.stringify(rangoPrecios)}&`
    }

    if (orden) {
      query += `orden=${JSON.stringify(orden)}&`
    }

    if (buscarPor) {
      query += `buscarPor=${buscarPor}&`
    }

    if (search) {
      query += `search=${search}&`
    }

    query += `limite=${limit}&`
    query += `pagina=${paginado.currentPage}`
    dispatch(getAll(query))
  }, [
    search,
    categorias,
    tags,
    rangoPrecios,
    formatos,
    orden,
    buscarPor,
    limit,
    paginado.currentPage,
  ])

  const handleCarrito = (id, precio) => {
    Swal.fire('Agregar al carrito', 'Se ha agregado exitosamente', 'success')
    const existe =
      listaCarrito.length > 0 && listaCarrito.find((item) => item.id === id)
    if (!existe) {
      const elemento = [...listaCarrito, { id, cantidad: 1, precio }]
      setListaCarrito(elemento)
      localStorage.setItem('carrito', JSON.stringify(elemento))
    }
  }

  return (
    <section>
      (
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <Filtros handleCurrent={handleCurrent} />
          <div className="lg:col-span-3 ">
            <div className="flex items-center justify-between bg-gray-100 px-2 z-20 rounded shadow-xl sticky lg:top-0 top-14">
              <p className="text-sm font-medium px-2 py-3">
                <span className="sm:inline">Vistos </span>
                {paginado.total &&
                paginado.totalPages !== paginado.currentPage ? (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      {paginado.currentPage * limit}
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      {count}
                    </span>{' '}
                    Libros
                  </>
                ) : paginado.totalPages === paginado.currentPage ? (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      {' '}
                      {(paginado.currentPage - 1) * limit +
                        (count === 6 ? count : count % limit)}
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      {count}
                    </span>{' '}
                    Libros
                  </>
                ) : (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      0
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      0
                    </span>{' '}
                    Libros
                  </>
                )}
              </p>
              <Ordenamiento handleCurrent={handleCurrent} />
            </div>
            <div className=" grid grid-cols-1 gap-px mt-4 bg-gray-100 border border-gray-100 sm:grid-cols-2 lg:grid-cols-3">
              {libros &&
                libros.map((libro) => (
                  <CardLibro
                    key={crypto.randomUUID()}
                    id={libro.id}
                    portada={libro.portada}
                    titulo={libro.titulo}
                    descuento={libro.descuento}
                    precio={libro.precio}
                    handleCarrito={() => handleCarrito(libro.id, libro.precio)}
                    esFavorito={
                      favoritos.length > 0
                        ? favoritos.some((fav) => fav.id === libro.id)
                        : false
                    }
                  />
                ))}
            </div>
            <div className="grid bg-gray-200 text-sm border border-gray-200 font-bold rounded shadow-xl my-3">
              {paginado && (
                <Paginacion
                  paginaAnterior={handlePrevius}
                  paginaSiguiente={handleNext}
                  paginaSeleccionada={handleCurrent}
                  {...paginado}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      )
    </section>
  )
}

export default Home
