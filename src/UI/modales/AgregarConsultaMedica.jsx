
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import '../../UI styles/Modal.css';
import { Context } from '../../context/Context';

 export const AgregarConsultaMedica = ({ paciente='Facundo Cáceres' }) => {

    const { addModalIsOpen, setAddModalIsOpen, fecha, padecimiento, tratamiento, notas, handleFecha, handlePadecimiento, handleTratamiento, handleNotas, addConsulta, currentPatient } = useContext(Context)

    if (!addModalIsOpen) return;

    return ReactDOM.createPortal(
        <div>
            <div className="fondo-agregar"></div>
            <div className='modal-agregar'>
                <div className='flex-container-consulta'>
                    <h2>Agregar consulta médica</h2>
                    <button onClick={ () => setAddModalIsOpen(false)}>x</button>
                </div>
                
                <p><strong>Paciente:</strong> { `${currentPatient[0].apellido}, ${currentPatient[0].nombre}` }</p>
                <form className='form-modal'>
                    <div>
                        <label>Fecha: </label>
                        <input  type='date' value={ fecha } onChange={ handleFecha } />
                    </div>
                    
                    <label>Motivo o Padecimiento:</label>
                    <textarea value={ padecimiento } onChange={ handlePadecimiento }/>

                    <label>Tratamiento y/o medicación: </label>
                    <textarea value={ tratamiento } onChange={ handleTratamiento } />

                    <label>Notas adicionales:</label>
                    <textarea value={ notas } onChange={ handleNotas }/>

                    <button type='submit'
                        onClick={ addConsulta }
                    >Agregar nueva consulta</button>
                </form>
            </div>
        </div>,
      document.getElementById('portal')  
    )   
}