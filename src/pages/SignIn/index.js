import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// Context
import { AuthContext } from '../../contexts/AuthContext';
// Assets
import './index.css';
import Logo from '../../assets/app-logo.png';

const SignIn = () => {
  // React Router
  const navigate = useNavigate()
  // Context
  const { signIn } = useContext(AuthContext)
  // Form states
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const baseURL = process.env.REACT_APP_BASE_URL + '/users/login'
    axios.post(baseURL, {
      email: email,
      senha: password
    })
      .then(res => {
        // Store data in context
        signIn({
          userToken: res.data.token,
          userId: res.data.usuario.dados,
          isAdmin: res.data.usuario.isAdmin,
          userEmail: res.data.usuario.email,
          userName: res.data.usuario.nome,
        })
        console.log('Sign in successfull!')
        navigate('/student')
      })
      .catch(err => {
        setMessage(err.response.data)
        console.error('Failed to sign in: ', err)
      })
  }

  return (
    // Container for the entire sign component
    <div className="SignIn">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <img src={Logo} alt="" />
        </div>
        <h1 className="h3 mb-4">Entrar</h1>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Seu email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} placeholder="Sua senha" required />
        </div>
        <text className="message">{message}</text>
        <button type="submit" className="btn btn-primary w-100"
          disabled={(!(email !== '' && password !== '')) || (false)}>
          Entrar
        </button>
        <p className="mt-3 mb-0 text-muted text-center">
          Não tem conta?&nbsp;
          <Link to='/signup'>Crie uma agora</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;