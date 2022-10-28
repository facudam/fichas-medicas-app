import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/PatientSearch.css';

export const PatientSearch = () => {

  const { filtrar, searchPatient } = useContext(Context)
  return (
    <div>
        <h1 className='search-title'>Lista de pacientes</h1>

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
