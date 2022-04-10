import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function useAuth() {
  useEffect(() => {
    alert("You're not authenticated")
  }, [])
  return false
}

export default function PrivateRoute({ children }) {
  const auth = useAuth()
  return auth ? children : <Navigate to="/" />
}
