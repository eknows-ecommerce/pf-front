import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllByName } from '../../features/actions/usuarios'
import Button from '../../components/templates/Button'

export default function Perfil() {
  const dispatch = useDispatch()
  const usuariosData = useSelector(({ usuariosStore }) => usuariosStore)
  const { user, isAuthenticated, isLoading } = useAuth0()
  const perfil = usuariosData.filter((e) => e.email === user.email)
  useEffect(() => {
    dispatch(getAllByName(user?.name))
    if (isAuthenticated) {
      // dispatch(getCartbyUser(user?.email))
      // localStorage.removeItem('prodCart')
    }
  }, [dispatch, user, isAuthenticated])
  return (
    <div>
      {usuariosData && usuariosData.length ? (
        <article className="p-4 bg-gray-00 border border-gray-200 rounded-xl">
          <div className="flex items-center">
            <img
              src={perfil.picture}
              alt={perfil.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="ml-3">
              <h5 className="text-lg font-medium text-violetapaleta">
                {perfil.name}
              </h5>
              <div className="flow-root">
                <ul className="flex flex-wrap -m-1"></ul>
              </div>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://github.com/andrewmcodes/hyperui"
                target="_blank"
                className="block h-full p-4 border border-white rounded-lg hover:border-gray-500"
              >
                <h5 className="font-medium text-white  text-violetapaleta">
                  Pais
                </h5>
                <p className="mt-1 text-xs font-medium text-black-300">
                  {perfil.ciudad}
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/markmead/hyperjs"
                target="_blank"
                className="block h-full p-4 border border-white rounded-lg hover:border-gray-500"
              >
                <h5 className="font-medium text-violetapaleta">e-mail</h5>
                <p className="mt-1 text-xs font-medium text-black">
                  {perfil.email}
                </p>
              </a>
            </li>
          </ul>
          <Button>Editar</Button>
        </article>
      ) : (
        { isLoading }
      )}
    </div>
  )
}
