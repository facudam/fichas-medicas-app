import  ReactDOM  from "react-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"

import '../../UI styles/Modal.css';
 

export const ModalSuccess = ({ mensaje }) => {

    const { modalIsOpen, setModalIsOpen }  = useContext(Context)

    if (!modalIsOpen) return;

  return ReactDOM.createPortal(
    <div onClick={ () => setModalIsOpen(false)}>
        <div className="modal-fondo"></div>
        <div className="modal">
            <img className="animate__heartBeat " src="imagesUI/success.svg" alt="success emoticon" />
            <p className="modal-p">{ mensaje }</p>
        </div>
    </div>,
    document.getElementById('portal')   
  )
}
