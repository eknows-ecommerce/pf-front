/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { useAuth0 } from '@auth0/auth0-react'

import Paginacion from 'components/Paginacion/Paginacion'
import Filtros from 'components/filtros/Filtros'

import { getAll } from 'features/actions/libros'
import { getByUser } from 'features/actions/favoritos'

import { getByNickname } from 'features/actions/usuarios'

import usePaginacion from 'hooks/usePaginacion'

import Ordenamiento from 'components/filtros/Ordenamiento'
import HomeLibros from 'components/contenedores/HomeLibros'

function Home() {
  const { user, isAuthenticated } = useAuth0()


  const dispatch = useDispatch()
  const {

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

  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  const { paginado, handlePrevius, handleCurrent, handleNext, handleTotal } =
    usePaginacion()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getByNickname(user))
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (usuario !== undefined) dispatch(getByUser(usuario.id))
  }, [usuario])

  useEffect(() => {
    dispatch(getByUser(usuario.id))
  }, [usuario])

  useEffect(() => {
    let query = ''

    if (categorias.length > 0)
      query += `categorias=${JSON.stringify(categorias)}&`
    if (tags.length > 0) query += `tags=${JSON.stringify(tags)}&`
    if (formatos.length > 0) query += `formatos=${JSON.stringify(formatos)}&`
    if (rangoPrecios) query += `precios=${JSON.stringify(rangoPrecios)}&`
    if (orden) query += `orden=${JSON.stringify(orden)}&`
    if (buscarPor) query += `buscarPor=${buscarPor}&`

    if (search) {
      query += `search=${search}&`

    }
  }, [
    paginas.currentPage,
    count,
    busqueda,
    queryCategorias,
    queryTags,
    queryRangoPrecios,
    sorter,
  ])

  return (
    <section>
       {
                loading ? (
                    <Loading setLoading={setLoading} />
                ) : 
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <Filtros handleCurrent={handleCurrent} />
          <div className="lg:col-span-3 ">
            <div className="flex items-center justify-between bg-gray-100 px-2 z-20 rounded shadow-xl sticky lg:top-0 top-14">
              <p className="text-sm font-medium px-2 py-3">
                <span className="sm:inline">Vistos </span>
                {count && paginas.totalPages !== paginas.currentPage ? (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      {paginas.currentPage * 6}
                    </span>{' '}
                    de{' '}
                    <span className="text-sm font-bold text-rosadito-500">
                      {count}
                    </span>{' '}
                    Libros
                  </>
                ) : paginas.totalPages === paginas.currentPage ? (
                  <>
                    <span className="text-sm font-bold text-rosadito-500">
                      {' '}
                      {(paginas.currentPage - 1) * 6 +
                        (count === 6 ? count : count % 6)}
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

            <HomeLibros />

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
}
    </section>
  )
}

export default Home
