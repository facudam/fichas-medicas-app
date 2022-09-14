import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import '../../UI styles/Pacients.css';
import { PatientSearch } from '../components/PatientSearch';
import { PatientTable } from '../components/PatientTable';

export const Pacients = () => {

  const { state } = useContext(Context);

  return (
    <div className='pacientes-page'>
      <PatientSearch />
      
        {
          ( state.length > 0 )
            ? <PatientTable />
            : <p className='no-pacientes'>Aún no se ha ingresado ningún paciente al sistema</p>

        }
      
    </div>
  )
}
