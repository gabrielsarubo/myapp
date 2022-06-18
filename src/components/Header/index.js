import { Link } from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <div className="Header container-fluid">
      <div className="container">
        <nav>
          <ul>
            <li><Link to='/student' className='active'>Inicio</Link></li>
            <li><Link to='/student/history' className=''>Histórico</Link></li>
            <li><Link to='/student/profile' className=''>Perfil</Link></li>
          </ul>
          <div className="logo">
            <span>MYAPP</span>
          </div>
        </nav>
      </div>
    </div>
  )
}
 
export default Header