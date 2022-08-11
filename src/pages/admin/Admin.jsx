import { Link } from 'react-router-dom'

import Barra from 'pages/admin/Barra'
import Info from 'pages/perfil/Info'

export default function Admin() {
  return (
    <div className="flex flex-col  max-h-full min-h-screen">
      <div>
        <Link
          to="datos"
          className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0"
        >
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://www.hyperui.dev/photos/man-4.jpeg"
            alt="Simon Lewis"
          />
          <div className="ml-1.5">
            <p className="text-xs">
              <strong className="block font-medium">Simon Lewis</strong>
              <span> simonlewis@fakemail.com </span>
            </p>
          </div>
        </Link>
      </div>

      <div className="flex  flex-grow h-screen ">
        <Barra />
        <Info />
      </div>
    </div>
  )
}
