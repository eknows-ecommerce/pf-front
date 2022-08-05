import Carrusel from '../../components/carrusel/Carrusel'
import Footer from '../../components/footer/Footer'
import SectionSesion from '../../components/section/SectionSesion'
import LandingBottom from '../../components/section/LandingBottom'
import img from './../../assets/img/backgroundLand2.png'

export default function Landing() {
  return (
    <div style={{backgroundImage: `url(${img})`}}>
      <SectionSesion />
      <Carrusel />
      <LandingBottom />
      <Footer />
    </div>
  )
}
