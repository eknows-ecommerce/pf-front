import Favoritos from './Favoritos'
import Pedidos from './Pedidos'

function Vista({ vista }) {
  if (vista === 'pedidos') {
    return (
      <>
        <div className="w-full sm:px-6">
          <Pedidos />
        </div>
      </>
    )
  }

  if (vista === 'favoritos') {
    return (
      <>
        <div className="w-full sm:px-6">
          <Favoritos />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="w-full sm:px-6">Nada por aqui..</div>
    </>
  )
}

export default Vista
