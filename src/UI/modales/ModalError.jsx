import { useContext } from "react";
import  ReactDOM  from "react-dom"
import { Context } from "../../context/Context";

import '../../UI styles/Modal.css';


export const ModalError = ({ mensaje }) => {

    const { errorModalIsOpen, setErrorModalIsOpen } = useContext(Context)

    if( !errorModalIsOpen ) return;

  return ReactDOM.createPortal(
    <div onClick={ () => setErrorModalIsOpen(false) }>
        <div className="modal-fondo"></div>
        <div className="modal">
            <img className="animate__heartBeat" src="imagesUI/error.svg" alt="error" />
            <p className="modal-p">{ mensaje }</p>
        </div>
    </div>,
    document.getElementById('portal')
  ) 
}
