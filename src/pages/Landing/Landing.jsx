import Carrusel from 'components/carrusel/Carrusel'
import Bienvenida from 'components/section/Bienvenida'
import Stories from 'components/section/Stories'
import Views from 'components/section/Views'

import Footer from 'components/footer/Footer'

function Landing() {



  return (
    <div>
      <Bienvenida />
      <Carrusel />
      <Views />
      <Stories />
      <Footer />
    </div>
  )
}

export default Landing
