import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '../templates/Button'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="flex flex-wrap gap-4 mt-8 text-center">
      <button onClick={() => loginWithRedirect()}>Ingresar</button>
    </div>
  )
}
