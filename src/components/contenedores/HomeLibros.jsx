import CardLibro from 'components/cards/CardLibro'
import Loading from 'components/loading/Loading'
import { useSelector } from 'react-redux'

function HomeLibros() {
  const { libros, cargando } = useSelector(({ librosStore }) => librosStore)

  return (
    <>
      {cargando ? (
        <Loading />
      ) : (
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
              />
            ))}
        </div>
      )}
    </>
  )
}

export default HomeLibros
