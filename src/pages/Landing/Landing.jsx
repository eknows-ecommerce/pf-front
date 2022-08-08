import Carrusel from '../../components/carrusel/Carrusel'
import Footer from '../../components/footer/Footer'
import Bienvenida from '../../components/section/Bienvenida'
import Stories from '../../components/section/Stories'
import Views from '../../components/section/Views'

export default function Landing() {
  return (
    <div>
      <Bienvenida />
      <Carrusel />
      <Views />
      <Stories />
    </div>
  )
}
