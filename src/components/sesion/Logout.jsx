import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '../templates/Button'

export default function Logout() {
  const { logout } = useAuth0()

  return (
    <button
      className="flex items-center justify-center content-center w-full px-12 py-3 text-sm font-medium shadow text-w-600 sm:w-auto hover:scale-110 hover:shadow-md hover:shadow-current focus:outline-none focus:ring mr-2  bg-rosadito-500 text-white"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  )
}
