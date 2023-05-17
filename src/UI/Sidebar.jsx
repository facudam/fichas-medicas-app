import { Link } from 'react-router-dom';
import '../UI styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {
  return (
    <nav className="sidebar">
        <Link className='link' to="/">
          <FontAwesomeIcon icon={faHospitalUser} className='font-icon' />
          Pacientes
        </Link>
        
        <Link className='link' to="/agregar-paciente">
          <FontAwesomeIcon icon={faUserPlus} className='font-icon' />
          Ingresar nuevo
        </Link>
      
           
    </nav>
  )
}

