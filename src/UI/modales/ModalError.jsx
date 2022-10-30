import { useContext } from "react";
import  ReactDOM  from "react-dom"
import { Context } from "../../context/Context";

import '../../UI styles/Modal.css';


export const ModalError = () => {

    const { errorModalIsOpen, setErrorModalIsOpen, mensajePacienteYaAgregado } = useContext(Context)

    if( !errorModalIsOpen ) return;

  return ReactDOM.createPortal(
    <div onClick={ () => setErrorModalIsOpen(false) }>
        <div className="modal-fondo"></div>
        <div className="modal">
            <img className="animate__heartBeat" src="imagesUI/error.svg" alt="error" />
            <p className="modal-p">{ mensajePacienteYaAgregado }</p>
        </div>
    </div>,
    document.getElementById('portal')
  ) 
}
