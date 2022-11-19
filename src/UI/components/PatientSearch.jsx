import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/PatientSearch.css';

export const PatientSearch = () => {

  const { filtrar, searchPatient } = useContext(Context)
  return (
    <div className='second-header'>
        <h1 className='search-title'>Bienvenido al sistema de control de pacientes</h1>
        <p className='search-paragraph'>Controla la información de tus pacientes</p>

        <form className='search-form'>
            <input
              value={ filtrar }
              onChange= { searchPatient }
              className='search-patient'
              type='search' 
              placeholder='Buscar por nombre o apellido'
            />
            <div className='container-search'>
              <img src='/imagesUI/lupa.svg' alt='buscar' />
            </div>
            
        </form>
    </div>
  )
}
