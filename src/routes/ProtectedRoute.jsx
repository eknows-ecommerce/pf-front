import { withAuthenticationRequired } from '@auth0/auth0-react'

export const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <p>Loading...</p>
      </div>
    ),
  })

  return <Component />
}
