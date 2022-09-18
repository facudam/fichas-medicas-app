import ReactDOM from 'react-dom';
import '../../UI styles/Modal.css';

 export const AgregarConsultaMedica = () => {

    return ReactDOM.createPortal(
        <div>
            <div className="fondo-agregar"></div>
            <div className='modal-agregar'>
                <div className='flex-container'>
                    <h2>Consulta médica</h2>
                    <button>x</button>
                </div>
                
                <p>Paciente: Facundo Cáceres</p>
                <form>
                    <label>Fecha: </label>
                    <input  type='datetime-local' />

                    <label>Motivo o Padecimineto</label>
                    <textarea />

                    <label>Tratamiento y/o medicación: </label>
                    <textarea />

                    <label>Notas adicionales</label>
                    <textarea />

                    <button type='submit'>Agregar nueva consulta</button>
                </form>
            </div>
        </div>,
      document.getElementById('portal')  
    )   
}