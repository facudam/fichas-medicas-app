import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import '../../UI styles/Pacients.css';
import { PatientFicha } from '../components/PatientFicha';

export const Pacients = () => {

  const { state } = useContext(Context);

  return (
    <div className='pacientes-page'>
      {
        ( state.pacientes.length > 0 )
          ? state.pacientes.map( paciente => (
            /*<li key={ paciente.dni}> { `${paciente.nombre} ${paciente.apellido}`}</li>*/
            <PatientFicha key={ paciente.dni} apellido={ paciente.apellido } nombre={ paciente.nombre }/>
          ))
          : <p className='no-pacientes'>Aún no se ha ingresado ningún paciente al sistema</p>

      }
    </div>
  )
}
