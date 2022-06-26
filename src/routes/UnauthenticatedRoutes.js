import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import {SignIn, SignUp, NotFound} from '../pages'

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  )
}

export default UnauthenticatedRoutes