import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('sf_auth') === '1'
  return isAuth ? children : <Navigate to="/login" replace />
}
