import { useContext } from 'react';
import { Context } from '../../context/Context';

import '../../UI styles/AddNewPatient.css';
import { ConfirmationModal } from '../modales/ConfirmationModal';


export const PatientFicha = ({ apellido, nombre, dni, paciente }) => {

  const { setConfirmationModalIsOpen, currentPatient, setCurrentPatient, addModalIsOpen, setAddModalIsOpen } = useContext(Context)


  const enviarDatos = (patient) => {
    setConfirmationModalIsOpen(true)
    setCurrentPatient([patient]);
  }

  const abrirModalConsulta = () => {
    setAddModalIsOpen(true);
    console.log(addModalIsOpen)
}


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
          <button 
            className='btn-ficha'
            onClick={ abrirModalConsulta }
            >
            Agregar consultas
          </button>
          <button
            onClick={ () => enviarDatos(paciente) }
            className='btn-ficha-delete' 
            title="Eliminar paciente">
            x
          </button>
      </td>
    </tr> 

    {
      (currentPatient.length < 1 )
        ? null
        : <ConfirmationModal paciente={ currentPatient[0] } nombrePaciente={ currentPatient[0].nombre }/>
    }

    
  </>
  
  
    
  )
  
}
