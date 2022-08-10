import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllByEmail } from '../../features/actions/usuarios' //no existe, crear porfi
import Button from '../../components/templates/Button'
import { getById } from '../../features/actions/usuarios'
import { useParams } from 'react-router-dom'

export default function Perfil() {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id, 'id')
  const usuariosData = useSelector(({ usuariosStore }) => usuariosStore)
  console.log(usuariosData, 'user')

  const { user, isLoading } = useAuth0()
  useEffect(() => {
    dispatch(getAllByEmail(id))
  }, [id, dispatch])
  const perfil = usuariosData?.usuarios
  const usu = perfil?.find((e) => e.email === user.email)
  console.log(usu, 'usuarios')
  console.log(perfil, 'perfil')
  return (
    <div>
      {perfil && perfil.length ? (
        <article className="p-4 bg-gray-00 border border-gray-200 rounded-xl">
          <div className="flex items-center">
            <img
              src={usu[0].picture}
              alt={usu[0].name}
              className="w-20 h-20 rounded-full"
            />
            <div className="ml-3">
              <h5 className="text-lg font-medium text-violetapaleta">
                {usu[0].name}
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
                  {usu[0].ciudad}
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
                  {usu[0].email}
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
