import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext';

import Header from '../../components/Header'

import './index.css'

const StudentProfile = () => {
  const { authData, signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  // Form states
  const [username, setUsername] = useState(authData.userName)
  const [password, setPassword] = useState('')
  // const [message, setMessage] = useState('')

  const handleNome = (e) => {
    e.preventDefault()
    const baseURL = process.env.REACT_APP_BASE_URL + '/register/updateUser'
    axios.post(baseURL, {
      id: authData.userId,
      nome: username
    })
      .then(res => {
        // Store data in context
        signIn({
          userToken: authData.userToken,
          userId: authData.userId,
          isAdmin: authData.isAdmin,
          userEmail: authData.email,
          userName: username,
        })
        navigate('/student')
      })
      .catch(err => {
        // setMessage(err.response.data)
        console.error('Failed to sign in: ', err)
      })
  }

  const handleSenha = (e) => {
    e.preventDefault()
    const baseURL = process.env.REACT_APP_BASE_URL + '/register/updateUser'
    axios.post(baseURL, {
      id: authData.userId,
      senha: password
    })
      .then(res => {
        navigate('/student')
      })
      .catch(err => {
        // setMessage(err.response.data)
        console.error('Failed to sign in: ', err)
      })
  }


  return (
    <>
      <Header />

      <div className="StudentProfile container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2>Perfil</h2>
          </div>
        </div>

        <div className="row mt-3 mb-5 justify-content-center">
          <div className="col-md-8">
            <h5 className='mb-3'>Informações básicas</h5>
            <form>
              <div className="mb-2">
                <label htmlFor="username" className="form-label">Nome</label>
                <input type="username" id="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="Nome" />
              </div>
              <button type='submit' className='btn btn-secondary' onClick={handleNome}>Salvar alterações</button>
            </form>
          </div>
        </div>

        <div className="row my-5 justify-content-center">
          <div className="col-md-8">
            <h5 className='mb-3'>Senha</h5>
            <form>
             
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Nova senha</label>
                <input type="password" id="passwordConfirm" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="" />
              </div>
              <button type='submit' className='btn btn-secondary' onClick={handleSenha}>Alterar senha</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentProfile
