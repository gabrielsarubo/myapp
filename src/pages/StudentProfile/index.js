import { useState } from 'react'

import Header from '../../components/Header'

import './index.css'

const StudentProfile = () => {
  // Form states
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  
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
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
              </div>
              <button type='submit' className='btn btn-secondary'>Salvar alterações</button>
            </form>
          </div>
        </div>
        
        <div className="row my-5 justify-content-center">
          <div className="col-md-8">
            <h5 className='mb-3'>Senha</h5>
            <form>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">Senha atual</label>
                <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="" />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordConfirm" className="form-label">Nova senha</label>
                <input type="passwordConfirm" id="passwordConfirm" className="form-control" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder="" />
              </div>
              <button type='submit' className='btn btn-secondary'>Alterar senha</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentProfile
