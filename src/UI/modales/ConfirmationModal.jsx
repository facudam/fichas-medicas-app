import { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../../context/Context";


export const ConfirmationModal = ({ paciente, nombrePaciente }) => {

    const { confirmationModalIsOpen, setConfirmationModalIsOpen, deletePatient, state } = useContext(Context);

    if (!confirmationModalIsOpen) return

    return ReactDOM.createPortal(
        <div>
            <div className="fondo-confirmation"></div>
            <div className="confirmation-modal">
                <p className="mensaje">¿Está seguro que desea eliminar al paciente { nombrePaciente }?</p>
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
        </div>,
        document.getElementById('portal')
    )
}