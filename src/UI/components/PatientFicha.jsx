import '../../UI styles/PatientFicha.css';

export const PatientFicha = ({ apellido, nombre }) => {

  return (
    <div className='ficha-paciente'>
        <div className="ficha-paciente__full-name">
            <p>{ `${apellido}, ${nombre}` }</p>
        </div>
        <div className="ficha-paciente__button-container">
            <button>Agregar consultas</button>
            <button title="Eliminar paciente">x</button>
        </div>
    </div>
  )
}
