import { Link } from 'react-router-dom'

import Barra from 'pages/admin/Barra'
import Info from 'pages/perfil/Info'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
export default function Admin() {
  //   const { getAccessTokenSilently } = useAuth0()
  //   const usuario = ({ useSelector }) => useSelector
  // console.log(usuario)
  //   const dispatch = useDispatch()
  //   useEffect(() => {
  //     const autAdmin = async () => {
  //       try {
  //         const token = await getAccessTokenSilently()
  //         dispatch(getAllUsuarios(token))
  //         dispatch(getAllLibros(token))
  //         console.log(token)
  //       } catch (err) {
  //         console.log(err)
  //       }
  //     }
  //     autAdmin()
  //   }, [])
  return (
    <div className="flex flex-col  max-h-full min-h-screen">
      <div>
        <Link
          to="/menu"
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
