import { Link } from 'react-router-dom';
import '../UI styles/Sidebar.css';


export const Sidebar = () => {
  return (
    <nav className="sidebar">
        <Link className='link' to="/">
          <img src='/imagesUI/persona.png' alt='persona boton'/>
          Pacientes
        </Link>
        
        <Link className='link' to="/agregar-paciente">
          <img src='/imagesUI/add.png' alt='agregar persona'/>
          Ingresar nuevo
        </Link>
      
           
    </nav>
  )
}

