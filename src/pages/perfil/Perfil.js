import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/templates/Button'
import { getById } from '../../features/actions/usuarios'

export default function Perfil() {
  const dispatch = useDispatch()
  const { usuarios, usuario } = useSelector(
    ({ usuariosStore }) => usuariosStore
  )
  const idProf = usuarios[0][0].id

  useEffect(() => {
    dispatch(getById(idProf))
  }, [idProf, dispatch])
  console.log('USUARIOS', usuarios)
  console.log('USUARIO', usuario)

  return (
    <div>
      <article className="p-4 bg-gray-00 border border-gray-200 rounded-xl">
        <div className="flex items-center">
          <img
            src={usuario.picture}
            alt={usuario.name}
            className="w-20 h-20 rounded-full"
          />
          <div className="ml-3">
            <h5 className="text-lg font-medium text-violetapaleta">
              {usuario.name}
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
                {usuario.ciudad}
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
                {usuario.email}
              </p>
            </a>
          </li>
        </ul>
        <Link to="editar">
          <Button>Editar</Button>{' '}
        </Link>
      </article>
    </div>
  )
}
