import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="flex flex-wrap gap-4 mt-8 text-center">
      <button
        className="bg-transparent p-3 font-semibold text-xl font-poiret-one text-rosadito-500 border border-rose-600 "
        onClick={() => loginWithRedirect()}
      >
        Ingresar
      </button>
    </div>
  )
}
