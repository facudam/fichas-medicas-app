import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import '../../UI styles/Pacients.css';
import { PatientFicha } from '../components/PatientFicha';
import { PatientSearch } from '../components/PatientSearch';

export const Pacients = () => {

  const { state } = useContext(Context);

  return (
    <div className='pacientes-page'>
      <PatientSearch />
      <table className='table-ficha'>
        <tr className={`tr-ficha tr-ficha-titles`}>
          <th className={`td-ficha td-ficha-title`}>DNI</th>
          <th className={`td-ficha td-ficha-title`}>Nombre completo</th>
        </tr>
        {
          ( state.length > 0 )
            ? state.map( paciente => (
              <PatientFicha key={ paciente.dni} apellido={ paciente.apellido } nombre={ paciente.nombre } dni={ paciente.dni } paciente={paciente}/> //pasamos el paciente para poder identificarlo y eliminarlo
            ))
            : <p className='no-pacientes'>Aún no se ha ingresado ningún paciente al sistema</p>

        }
      </table>
    </div>
  )
}
