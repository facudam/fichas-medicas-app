import { NavLink, useLocation } from 'react-router-dom';
import '../UI styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import user from '../user.jpg';


export const Sidebar = () => {

  const location = useLocation();

  return (
    <nav className="sidebar">
        <div className='admin'>
          <img src={user} alt='profile-admin' className='admin-img'/>
          <p>Administrador</p>
        </div>
        <NavLink className={`link ${location.pathname === '/' ? 'link-activo' : ''}`} to="/" >
          <FontAwesomeIcon icon={faHospitalUser} className='font-icon' />
          Pacientes
        </NavLink>
        
        <NavLink className={`link ${location.pathname === '/agregar-paciente' ? 'link-activo' : ''}`} to="/agregar-paciente">
          <FontAwesomeIcon icon={faUserPlus} className='font-icon' />
          Ingresar nuevo
        </NavLink>
      
           
    </nav>
  )
}

