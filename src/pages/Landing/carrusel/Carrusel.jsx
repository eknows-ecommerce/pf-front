import { Carousel } from 'react-carousel-minimal'
import img1 from '../../../assets/imagenes/imagenes libros/percy.jpg'
import img2 from '../../../assets/imagenes/imagenes libros/harrypotter1.webp'
import img3 from '../../../assets/imagenes/imagenes libros/game-of-thrones.webp'
import img4 from '../../../assets/imagenes/imagenes libros/losjuegos.jpeg'

import style from './Carrusel.module.css'

export default function Carrusel() {
  const data = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
  ]
  return (
    <div className={style.containerCarousel}>
      <Carousel
        data={data}
        time={6000}
        width="100%"
        height="30rem"
        radius="1rem"
        captionPosition="bottom"
        automatic={true}
        pauseIconColor="blue"
        pauseIconSize="100px"
        slideBackgroundColor="white"
        slideImageFit="cover"
        thumbnailWidth="10rem"
        style={{
          maxWidth: '100%',
          maxHeight: '450px',
          margin: '3rem auto',
        }}
      />
      <p>Viaja a otro universo con solo un click</p>
    </div>
  )
}
