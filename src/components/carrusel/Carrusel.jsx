import { Carousel } from 'react-carousel-minimal'
import { images } from '../../assets/img'
import style from './Carrusel.module.css'

export default function Carrusel() {
  const data = [
    {
      image: images['percy'],
    },
    {
      image: images['game_of_thrones'],
    },
    {
      image: images['harrypotter'],
    },
    {
      image: images['losjuegos'],
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
    </div>
  )
}
