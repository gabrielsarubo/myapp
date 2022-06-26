import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import {StudentHome, Practice, StudentHistory, StudentProfile, NotFound} from '../pages'

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student" replace />} />
      {/* Student routes */}
      <Route path='/student' element={<StudentHome />} />
      <Route path='/student/history' element={<StudentHistory />} />
      <Route path='/student/profile' element={<StudentProfile />} />
      {/* Practice */}
      <Route path='/practice/:categoryId' element={<Practice />} />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  )
}

export default UnauthenticatedRoutes