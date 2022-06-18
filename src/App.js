import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Auth Pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// Student pages
import StudentHome from './pages/StudentHome'
import StudentHistory from './pages/StudentHistory'
import StudentProfile from './pages/StudentProfile'
// Other pages
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/signin' replace />} />
        {/* Auth routes */}
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        {/* Student routes */}
        <Route path='/student' element={<StudentHome />} />
        <Route path='/student/history' element={<StudentHistory />} />
        <Route path='/student/profile' element={<StudentProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
