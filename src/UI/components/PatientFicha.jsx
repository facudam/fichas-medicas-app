import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/PatientFicha.css';
import { ConfirmationModal } from '../modales/ConfirmationModal';
import { formatearDNI } from '../../helpers/formatearDNI';


export const PatientFicha = ({ apellido, nombre, dni, paciente }) => {

  const { setConfirmationModalIsOpen, currentPatient, setCurrentPatient, setAddModalIsOpen, setFichaIsOpen } = useContext(Context)


  const enviarDatos = (patient) => {
    setConfirmationModalIsOpen(true)
    setCurrentPatient([patient]);
  }

  const openConsultaModal = (patient) => {
    setAddModalIsOpen(true)
    setCurrentPatient([patient])
  }

  const verFichaMedica = () => {
    setCurrentPatient([paciente])
    setFichaIsOpen(true)
  }

  return (

  <> 
    <tr className='tr-ficha'>
      <td className='td-ficha'>
        { formatearDNI(dni)  }
      </td>
      <td className='td-ficha'>
          { `${apellido}, ${nombre}` }
      </td>
      <td className={`td-ficha center`}>
          <button className='btn-verficha' onClick={ verFichaMedica }>Ver ficha médica</button>
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
