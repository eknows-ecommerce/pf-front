import Carrusel from '../../components/carrusel/Carrusel'
import Footer from '../../components/footer/Footer'
import Bienvenida from '../../components/section/Bienvenida'
import Stories from '../../components/section/Stories'
import Views from '../../components/section/Views'

export default function Landing() {
  return (
    <div>
      <Carrusel />
      <h2 className="text-2xl font-semibold font-poiret-one">
        Viaja a otro universo con solo un click
      </h2>
      <Bienvenida />
      <Views />
      <Stories />
      <Footer />
    </div>
  )
}
