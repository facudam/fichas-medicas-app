import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import '../../UI styles/Pacients.css';

export const Pacients = () => {

  const { pacientes } = useContext(Context);

  return (
    <div className='pacientes-page'>
      {
        ( pacientes.length === 0 )
          ? <p className='no-pacientes'>Aún no se ha ingresado ningún paciente al sistema</p>
          : null
      }
    </div>
  )
}
