import ReactDOM from "react-dom";


export const ConfirmationModal = ({ paciente }) => {



    return ReactDOM.createPortal(
        <div>
            <div className="fondo-confirmation"></div>
            <div className="confirmation-modal">
                <p className="mensaje">¿Está seguro que desea eliminar al paciente { paciente }?</p>
                <div className="btn-container">
                    <button>Sí</button>
                    <button>No</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}