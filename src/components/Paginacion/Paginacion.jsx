const Paginacion = ({
  paginaAnterior,
  paginaSiguiente,
  paginaSeleccionada,
  paginas,
}) => {
  return (
    <div className="inline-flex items-center justify-center w-full space-x-4  bg-gray-200 border border-gray-200">
      <a
        href={'#'}
        onClick={paginaAnterior}
        className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <p className="text-xs">
        {paginas?.currentPage}
        <span className="mx-0.25">/</span>
        {paginas?.totalPages}
      </p>

      <a
        href={'#'}
        onClick={paginaSiguiente}
        className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>

    // <div>
    /* <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          width: '100vw',
          justifyContent: 'space-evenly',
        }}
      >
        <li>
          <a href={'#'} onClick={paginaAnterior}>
            Anterior
          </a>
        </li>
        {paginas?.totalPages &&
          new Array(paginas.totalPages).fill(0).map((pagina, index) => {
            return (
              <li key={`Page_${index + 1}`}>
                <a
                  href={'#'}
                  onClick={() => {
                    paginaSeleccionada(index + 1)
                  }}
                  style={{
                    fontSize: paginas.currentPage === index + 1 ? '18px' : '',
                    color:
                      paginas.currentPage === index + 1 ? 'deeppink' : 'black',
                  }}
                >
                  {index + 1}
                </a>
              </li>
            )
          })}
        <li>
          <a href={'#'} onClick={paginaSiguiente}>
            Siguiente
          </a>
        </li>
      </ul>
    </div> */
  )
}

export default Paginacion
