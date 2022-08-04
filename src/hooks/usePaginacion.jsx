import { useState } from 'react'

function usePaginacion(length) {
    
  const [paginas, setPaginas] = useState({
    currentPage: 1,
    totalPages: length,
  })

  const paginaAnterior = () => {
    setPaginas({
      ...paginas,
      currentPage:
        paginas.currentPage - 1 < 1
          ? paginas.totalPages
          : paginas.currentPage - 1,
    })
  }
  const paginaSiguiente = () => {
    setPaginas({
      ...paginas,
      currentPage:
        paginas.currentPage + 1 <= paginas.totalPages
          ? paginas.currentPage + 1
          : 1,
    })
  }
  const paginaSeleccionada = (pagina) => {
    setPaginas({
      ...paginas,
      currentPage: pagina,
    })
  }

  return {
    paginas,
    paginaAnterior,
    paginaSeleccionada,
    paginaSiguiente,
  }
}

export default usePaginacion
