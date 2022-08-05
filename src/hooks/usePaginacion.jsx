import { useState } from 'react'

function usePaginacion() {
  const [paginas, setPaginas] = useState({
    currentPage: 0,
    totalPages: 0,
  })

  const handleTotal = (total) => {
    setPaginas({
      ...paginas,
      totalPages: Math.ceil(total / 6),
    })
  }

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
    handleTotal,
  }
}

export default usePaginacion
