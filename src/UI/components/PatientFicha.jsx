import { useContext } from 'react';
import { Context } from '../../context/Context';

import '../../UI styles/AddNewPatient.css';
import { ConfirmationModal } from '../modales/ConfirmationModal';

export const PatientFicha = ({ apellido, nombre, dni, paciente }) => {

  const { setConfirmationModalIsOpen } = useContext(Context)

  return (

  <> 
    <tr className='tr-ficha'>
      <td className='td-ficha'>
        { dni }
      </td>
      <td className='td-ficha'>
          { `${apellido}, ${nombre}` }
      </td>
      <td className={`td-ficha center`}>
      <button className='btn-verficha'>Ver fichas</button>
          <button className='btn-ficha'>Agregar consultas</button>
          <button
            onClick={ () => setConfirmationModalIsOpen(true) }
            className='btn-ficha-delete' 
            title="Eliminar paciente">
            x
          </button>
      </td>
    </tr> 

    <ConfirmationModal paciente={paciente} nombrePaciente={ nombre }/>
  </> 
    
  )
}
