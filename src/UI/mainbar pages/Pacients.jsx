import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import '../../UI styles/Pacients.css';

export const Pacients = () => {

  const { state } = useContext(Context);

  return (
    <div className='pacientes-page'>
      {
        ( state.pacientes.length === 0 )
          ? <p className='no-pacientes'>Aún no se ha ingresado ningún paciente al sistema</p>
          : state.pacientes.map( paciente => (
            <li>{ paciente.nombre }</li>
          ))

      }
    </div>
  )
}
