import { Link } from 'react-router-dom'

import './index.css'
import Logo from '../../assets/app-logo.png'

const Header = () => {
  return (
    <div className="Header container-fluid">
      <div className="container">
        <nav>
          <ul>
            <li><Link to='/student' className='active'><i className="bi-bi bi-house-door"></i>&nbsp;&nbsp;Inicio</Link></li>
            <li><Link to='/student/history' className=''><i className="bi bi-file-earmark-ruled"></i>&nbsp;&nbsp;Histórico</Link></li>
            <li><Link to='/student/profile' className=''><i className="bi bi-person-badge"></i>&nbsp;&nbsp;Perfil</Link></li>
          </ul>
          <div className="logo__container">
            <img src={Logo} alt="" />
            <span className='logo__title'>Academy</span>
          </div>
        </nav>
      </div>
    </div>
  )
}
 
export default Header