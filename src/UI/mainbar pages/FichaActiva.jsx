import { useContext } from 'react';
import { Context } from '../../context/Context'
import '../../UI styles/FichaActiva.css';
import { Consulta } from '../components/Consulta';

export const FichaActiva = () => {

  const { currentPatient } = useContext(Context)
  return (
    <div className='ficha-activa'>
        <h1 className="ficha-activa-title">Paciente: { `${currentPatient[0].apellido}, ${currentPatient[0].nombre}` }</h1>
        <div className="datos-container">
            <div className="datos-container__caja">
                <h2 className='datos-title'>Datos Personales:</h2>
                <p><b>Edad:</b> { currentPatient[0].edad } años</p>
                <p><b>DNI:</b> { currentPatient[0].dni }</p>
            </div>
            <div className="datos-container__caja">
                <h2 className='datos-title'>Datos de contacto:</h2>
                <p><b>Teléfono:</b> { currentPatient[0].telefono }</p>
                <p><b>E-mail:</b> { currentPatient[0].email }</p>
            </div>
        </div>

        <h2 className='ficha-activa-second-title'>Consultas médicas realizadas:</h2>
        <div className='consultas-container'>
          {
            (currentPatient[0].consultas.length > 0 )
             ? currentPatient[0].consultas.map(consulta => (
               <Consulta 
                fecha={ consulta.fecha }
                padecimiento={ consulta.padecimiento }
                tratamiento={ consulta.tratamiento }
                notas={ consulta.notas } />
             ))
             : <p className='sin-consulta'>No hay consultas disponibles aún</p>
          }
        </div>
    </div>
  )
}
