import Carrusel from '../../components/carrusel/Carrusel'
import Footer from '../../components/footer/Footer'
import SectionSesion from '../../components/section/SectionSesion'
import LandingBottom from '../../components/section/LandingBottom'

export default function Landing() {
  return (
    <div>
      <SectionSesion />
      <Carrusel />
      <LandingBottom />
      <Footer />
    </div>
  )
}
