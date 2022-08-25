import { Link } from 'react-router-dom'
import Button from '../templates/Button'

function Views() {
  return (
    <aside className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center sm:text-left">
          <h2 className="text-3xl font-bold  font-comforta-300 text-gray-900 md:text-4xl">
            K-views
          </h2>
          <p className="hidden text-gray-500 font-bold   font-comforta-300 md:mt-3x2 md:block">
            Lleva las historias que te atrapan en formato digital a donde vayas.
          </p>
          <div className="mt-4 md:mt-8">
            <Link to="views">
              <Button>Ver</Button>
            </Link>
          </div>
        </div>
      </div>
      <img
        alt="#"
        src="https://blog.phonehouse.es/wp-content/uploads/2017/05/ebook.jpg"
        className="object-cover w-full h-56 sm:h-full rounded-3xl"
      />
    </aside>
  )
}

export default Views
