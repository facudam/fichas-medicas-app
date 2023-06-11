import { useContext, useEffect } from 'react'
import { Context } from '../../context/Context';
import '../../UI styles/Patients.css';
import { PatientSearch } from '../components/PatientSearch';
import { PatientTable } from '../components/PatientTable';
import { AgregarConsultaMedica } from '../modales/AgregarConsultaMedica'
import { Ficha } from '../modales/Ficha';


export const Patients = () => {

  const { state, fichaIsOpen, setIsUpdatingDataActive } = useContext(Context);

  useEffect(() => { setIsUpdatingDataActive(false) }, [])

  return (
    <div className='pacientes-page'>

        <PatientSearch />
        
          { 
            ( state.length > 0 )
              ? <>
                  <h2>Listado de pacientes activos</h2>
                  <PatientTable />
                </>
              : <p className='no-pacientes'>Aún no se ha ingresado ningún paciente al sistema</p>
            
          }
        <AgregarConsultaMedica /> 
        {
          fichaIsOpen && <Ficha />
        } 
    </div>
  )
}
