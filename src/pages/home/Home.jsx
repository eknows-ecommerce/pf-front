import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CardLibro from '../../components/cards/CardLibro'
import { getAll } from '../../features/actions/libros'
import Paginacion from '../../components/Paginacion/Paginacion'
import usePaginacion from '../../hooks/usePaginacion'

function Home() {
  const dispatch = useDispatch()
  const {
    paginas,
    paginaAnterior,
    paginaSeleccionada,
    paginaSiguiente,
    handleTotal,
  } = usePaginacion()
  const { libros, count } = useSelector(({ librosStore }) => librosStore)

  useEffect(() => {
    dispatch(getAll(`offset=0`))
  }, [])
  
  useEffect(() => {
    handleTotal(count)
    dispatch(getAll(`offset=${(paginas.currentPage - 1) * 6}`))
  }, [count,paginas.currentPage])

  return (
    <>
      <ContainerLibros>
        {libros &&
          libros.map((libro) => (
            <CardLibro
              key={crypto.randomUUID()}
              id={libro.id}
              portada={libro.portada}
              titulo={libro.titulo}
              descuento={libro.descuento}
              precio={libro.precio}
            />
          ))}
      </ContainerLibros>
      {count !== 0 && (
        <Paginacion
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
          paginaSeleccionada={paginaSeleccionada}
          paginas={paginas}
        />
      )}
    </>
  )
}

const ContainerLibros = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export default Home
