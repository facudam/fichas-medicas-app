import  ReactDOM  from "react-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"

import '../../UI styles/ModalSuccess.css';
 

export const ModalSuccess = () => {

    const { modalIsOpen, setModalIsOpen}  = useContext(Context)

    if (!modalIsOpen) return null;

  return ReactDOM.createPortal(
    <div onClick={ () => setModalIsOpen(false)}>
        <div className="modal-fondo"></div>
        <div className="modal-success">
            <img className="animate__heartBeat" src="imagesUI/success.svg" alt="success emoticon" />
            <p>¡Usuario añadido correctamente!</p>
        </div>
    </div>,
    document.getElementById('portal')   
  )
}
