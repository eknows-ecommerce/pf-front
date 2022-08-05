import Carrusel from '../../components/carrusel/Carrusel'
import Footer from '../../components/footer/Footer'
import SectionSesion from '../../components/section/SectionSesion'

export default function Landing() {
  return (
    <div>
      <SectionSesion />
      <Carrusel />
      <br></br>
        <h2 className="text-3xl font-semibold font-poiret-one">K-views</h2>
        <h2 className="text-2xl font-poiret-one">
          Las historias mas atrapantes, a donde quieras
        </h2>
      <br></br>
        <h2 className="text-3xl font-semibold font-poiret-one">K-stories</h2>
        <h2 className="text-2xl font-poiret-one">
          Para tí, en todas las formas
        </h2>
      <Footer />
    </div>
  )
}
