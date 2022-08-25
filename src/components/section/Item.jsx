import {Slide} from 'pure-react-carousel'
import {Link} from 'react-router-dom'


export default function Item({categoria, titulo, id, index}) {
  return (
    <Slide index={index}>
        <Link to={`/detalle/${id}`}>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
            <img
                src="https://m.media-amazon.com/images/I/5153pesmy2L.jpg"
                alt="alcatraz"
                className="object-cover object-center w-full"
            />
            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                ${categoria}
                </h2>
                <div className="flex h-full items-end pb-6">
                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                    ${titulo}
                </h3>
                </div>
            </div>
            </div>
        </Link>
    </Slide>
  )
}
