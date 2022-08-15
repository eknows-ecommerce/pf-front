/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { create } from 'features/actions/usuarios'
import Login from '../sesion/Login'
import Logout from '../sesion/Logout'

export default function Bienvenida() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  useEffect(() => {
    const authenticateUser = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently()

        const body = {
          token: token,
          user,
        }

        dispatch(create(body))
      }
    }
    authenticateUser()
  }, [isAuthenticated])

  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://image.winudf.com/v2/image/Y29tLkxpdmVXYWxscGFwZXJzVUEuYXBwMDUwM19zY3JlZW5zaG90c18wXzllMmVkZjk4/screen-0.jpg?fakeurl=1&type=.webp"
        alt="Couple on a bed with a dog"
      />
      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent" />
      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-6xl font-extrabold  font-comforta-300 sm:text-7xl">
            Bievenidos a
            <strong className="font-extrabold text-rose-700 sm:block">
              e-Knows
            </strong>
          </h1>
          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            ... donde las historias te encuentran
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-center"></div>
          <div className="flex flex-wrap gap-4 mt-8 text-center">
            {isAuthenticated ? (
              <>
                <Logout />
              </>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
