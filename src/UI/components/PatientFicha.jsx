import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

import '../../UI styles/AddNewPatient.css';
import { ConfirmationModal } from '../modales/ConfirmationModal';


export const PatientFicha = ({ apellido, nombre, dni, paciente }) => {

  const { setConfirmationModalIsOpen, currentPatient, setCurrentPatient, setAddModalIsOpen } = useContext(Context)


  const enviarDatos = (patient) => {
    setConfirmationModalIsOpen(true)
    setCurrentPatient([patient]);
  }

  const openConsultaModal = (patient) => {
    setAddModalIsOpen(true)
    setCurrentPatient([patient])
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
          <Link className='btn-verficha' to="/ficha-activa" onClick={() => setCurrentPatient([paciente])}>Ver ficha completa</Link>
          <button 
            className='btn-ficha'
            onClick={ () =>  openConsultaModal(paciente)}
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
