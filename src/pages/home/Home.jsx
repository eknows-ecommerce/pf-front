/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Filtros from 'components/filtros/Filtros'
import { getAll } from 'features/actions/libros'
import { getByUser } from 'features/actions/favoritos'
import { getByNickname } from 'features/actions/usuarios'

import Ordenamiento from 'components/filtros/Ordenamiento'
import HomeLibros from 'components/contenedores/HomeLibros'
import Paginacion2 from 'components/Paginacion/Paginacion2'
import { setPaginasTotales, setReset } from 'features/reducers/librosSlice'

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
    paginaActual,
    limite,
    total,
  } = useSelector(({ librosStore }) => librosStore)

  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)

  // const { paginado, handlePrevius, handleCurrent, handleNext, handleTotal } =
  //   usePaginacion()

  useEffect(() => {
    dispatch(setPaginasTotales({ count, limite: 6 }))
  }, [count])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getByNickname(user))
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (isAuthenticated) {
      if (usuario !== undefined) dispatch(getByUser(usuario.id))
    }
  }, [usuario])

  // useEffect(() => {
  //   let query = ''
  //   if (orden) query += `orden=${JSON.stringify(orden)}&`

  //   query += `limite=6&`
  //   query += `pagina=1`

  //   dispatch(getAll(query))
  // }, [paginaActual === 1])

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

    query += `limite=6&`
    query += `pagina=${paginaActual}`

    dispatch(getAll(query))
  }, [
    search,
    categorias,
    tags,
    rangoPrecios,
    formatos,
    orden,
    buscarPor,
    limite,
    paginaActual,
    count,
  ])

  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <Filtros />

            <div className="lg:col-span-3 ">
              <div className="flex items-center justify-between bg-gray-100 px-2 z-20 rounded shadow-xl sticky lg:top-0 top-14">
                <p className="text-sm font-medium px-2 py-3">
                  <span className="sm:inline">Vistos </span>
                  {count && total !== paginaActual ? (
                    <>
                      <span className="text-sm font-bold text-rosadito-500">
                        {paginaActual * limite}
                      </span>{' '}
                      de{' '}
                      <span className="text-sm font-bold text-rosadito-500">
                        {count}
                      </span>{' '}
                      Libros
                    </>
                  ) : total === paginaActual ? (
                    <>
                      <span className="text-sm font-bold text-rosadito-500">
                        {' '}
                        {(paginaActual - 1) * limite +
                          (count === 6 ? count : count % limite)}
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

                <Ordenamiento />
              </div>

              <HomeLibros />

              <Paginacion2 />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
