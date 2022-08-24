import { Link } from 'react-router-dom'
import Button from '../templates/Button'

function Stories() {
  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="https://i.blogs.es/416113/libros/450_1000.jpg"
                alt="Indoors house"
              />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16" />
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-4xl font-bold sm:text-3xl font-comforta-300">
                K-stories
              </h2>
              <p className="mt-3x1 text-gray-600  font-bold font-comforta-300">
                Para tí en formato papel, para tu biblioteca.
              </p>
              <br />
              <Link to="stories">
                <Button>Conócelos</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stories

