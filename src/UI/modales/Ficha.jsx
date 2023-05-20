import { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../../context/Context";
import '../../UI styles/Ficha.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { Consulta } from "../components/Consulta";
import { formatearFecha } from "../../helpers/formatearFecha";
import { formatearDNI } from "../../helpers/formatearDNI";

export const Ficha = () => {

    const { currentPatient, setFichaIsOpen } = useContext(Context)

    return ReactDOM.createPortal(
        <>
            <div className="modal-fondo"></div>
            <div className="ficha">
                <div className="ficha-header">
                    <h2>Información del paciente</h2>
                    <button onClick={() => setFichaIsOpen(false)}>Cerrar</button>
                </div>
                <div className="ficha-info">
                    <div className="ficha-info__user">
                        <FontAwesomeIcon icon={faHospitalUser} className="ficha-user" />
                    </div>
                    <div className="ficha-info__datos">
                        <h3>Datos personales</h3>
                        <p>Nombre completo: <span className="font-clear">{currentPatient[0].apellido}, {currentPatient[0].nombre}</span></p>
                        <p>Edad: <span className="font-clear">{currentPatient[0].edad} años</span></p>
                        <p>DNI: <span className="font-clear">{ formatearDNI(currentPatient[0].dni) }</span></p>
                        <p>Teléfono: <span className="font-clear">{currentPatient[0].telefono}</span></p>
                        <p>Email: <span className="font-clear">{currentPatient[0].email}</span></p>   
                    </div>
                </div>
                <div className="consultas-realizadas">
                    {
                        (currentPatient[0].consultas.length > 0 )
                            ?  
                                <>
                                    <h3>Consultas realizadas:</h3>
                                    {
                                        currentPatient[0].consultas.map(consulta => (
                                            <div key={ Math.floor(Math.random() * 999999) }>
                                                <Consulta 
                                                    fecha={ formatearFecha(consulta.fecha) }
                                                    padecimiento={ consulta.padecimiento }
                                                    tratamiento={ consulta.tratamiento }
                                                    notas={ consulta.notas } 
                                                />
                                            </div> 
                                    ))}
                                </>
                            
                            
                            : <p className="no-consultas">Aún no se ha registrado ninguna consulta médica</p>
                    }
                </div>
                
            </div>,
        </>,
        document.getElementById('portal')
    )
}