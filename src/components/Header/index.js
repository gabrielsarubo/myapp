import { Link, useLocation } from 'react-router-dom'

import './index.css'
import Logo from '../../assets/app-logo.png'

const Header = () => {
  const location = useLocation()
  
  return (
    <div className="Header container-fluid">
      <div className="container">
        <nav>
          <ul>
            <li><Link to='/student' className={location.pathname === '/student' ? 'active' : ''}><i className="bi-bi bi-house-door"></i>&nbsp;&nbsp;Inicio</Link></li>
            <li><Link to='/student/history' className={location.pathname === '/student/history' ? 'active' : ''}><i className="bi bi-file-earmark-ruled"></i>&nbsp;&nbsp;Histórico</Link></li>
            <li><Link to='/student/profile' className={location.pathname === '/student/profile' ? 'active' : ''}><i className="bi bi-person-badge"></i>&nbsp;&nbsp;Perfil</Link></li>
          </ul>
          <div className="logo__container">
            <img src={Logo} alt="" />
            <span className='logo__title'>Academy</span>
          </div>
          <ul>
            <li><Link to='/signin'><i className="bi bi-box-arrow-right"></i>&nbsp;&nbsp;Sair</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
 
export default Header