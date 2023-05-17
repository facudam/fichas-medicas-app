import { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../../context/Context";
import '../../UI styles/Modal.css'


export const ConfirmationModal = ({ paciente, nombrePaciente }) => {

    const { confirmationModalIsOpen, setConfirmationModalIsOpen, deletePatient } = useContext(Context);

    if (!confirmationModalIsOpen) return

    return ReactDOM.createPortal(
        <>
            {/* <div className="fondo-agregar"></div> */}
            <div className="modal-fondo2"></div>
            <div className="confirmation-modal">
                <p>¿Está seguro que desea eliminar al paciente { nombrePaciente } { paciente.apellido}?</p>
                <div className="btn-container">
                    <button
                        onClick= { () => deletePatient(paciente) }
                    >Sí</button>
                    <button 
                        onClick={() => setConfirmationModalIsOpen(false)}
                    >No
                    </button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}