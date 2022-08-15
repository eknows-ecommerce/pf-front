/* eslint-disable jsx-a11y/anchor-is-valid */
const Paginacion = ({ paginaAnterior, paginaSiguiente, paginas }) => {
  return (
    <div className="inline-flex items-center justify-center w-full space-x-4  bg-transparent">
      {!isNaN(paginas?.totalPages) ? (
        <>
          <a
            href={'#'}
            onClick={paginaAnterior}
            className="inline-flex items-center justify-center w-8 h-8 shadow-md shadow-current rounded hover:text-rosadito-500  hover:border-rosadito-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4/5 h-4/5 hover:scale-110"
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
            <span className="mx-0.5">/</span>
            {paginas?.totalPages}
          </p>

          <a
            href={'#'}
            onClick={paginaSiguiente}
            className="inline-flex items-center justify-center w-8 h-8 shadow-md shadow-current rounded hover:text-rosadito-500  hover:border-rosadito-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4/5 h-4/5 hover:scale-110"
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
        </>
      ) : (
        <h1> NO HAY INFORMACION PARA MOSTRAR</h1>
      )}
    </div>
  )
}

export default Paginacion
