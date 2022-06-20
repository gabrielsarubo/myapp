import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Contexts
import AuthContextProvider from './contexts/AuthContext'
// Auth Pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// Student pages
import StudentHome from './pages/StudentHome'
import StudentHistory from './pages/StudentHistory'
import StudentProfile from './pages/StudentProfile'
import { PracticeGrammar, PracticeTranslation } from './pages/Practice'
// Other pages
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <AuthContextProvider>
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
          {/* Practice */}
          <Route path='/practice/grammar' element={<PracticeGrammar />} />
          <Route path='/practice/translation' element={<PracticeTranslation />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
