import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes'
import { AuthContext } from './contexts/AuthContext'

const App = () => {
  const { authData } = useContext(AuthContext)
  return (
    <BrowserRouter>
      {authData.userToken ? (
        <AuthenticatedRoutes />
      ) : (
        <UnauthenticatedRoutes />
      )}
    </BrowserRouter>
  )
}

export default App
