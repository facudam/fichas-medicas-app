import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../../context/Context';
import '../../UI styles/Modal.css';

 export const AgregarConsultaMedica = ({ paciente='Facundo Cáceres' }) => {
     const { addModalIsOpen } = useContext(Context)

    if ( !addModalIsOpen ) return;

    return ReactDOM.createPortal(
        <div>
            <div className="fondo-agregar"></div>
            <div className='modal-agregar'>
                <div className='flex-container'>
                    <h2>Consulta médica</h2>
                    <button>x</button>
                </div>
                
                <p><strong>Paciente:</strong> { paciente }</p>
                <form className='form-modal'>
                    <div>
                        <label>Fecha: </label>
                        <input  type='datetime-local' />
                    </div>
                    
                    <label>Motivo o Padecimiento:</label>
                    <textarea />

                    <label>Tratamiento y/o medicación: </label>
                    <textarea />

                    <label>Notas adicionales:</label>
                    <textarea />

                    <button type='submit'>Agregar nueva consulta</button>
                </form>
            </div>
        </div>,
      document.getElementById('portal')  
    )   
}