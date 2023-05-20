import { useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../../context/Context";
import '../../UI styles/Ficha.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { Consulta } from "../components/Consulta";
import { formatearFecha } from "../../helpers/formatearFecha";

export const Ficha = () => {

    const { currentPatient, setFichaIsOpen } = useContext(Context)

    return ReactDOM.createPortal(
        <>
            <div className="modal-fondo"></div>
            <div className="ficha">
                <div>
                    <h2 className="registro-title">Información del paciente</h2>
                    <button onClick={() => setFichaIsOpen(false)}>Cerrar</button>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faHospitalUser} />
                    </div>
                    <div>
                        <h3>Datos personales</h3>
                        <p>Nombre completo: {currentPatient[0].apellido}, {currentPatient[0].nombre}</p>
                        <p>Edad: {currentPatient[0].edad}</p>
                        <p>DNI: {currentPatient[0].dni}</p>
                        <p>Teléfono: {currentPatient[0].telefono}</p>
                        <p>Email: {currentPatient[0].email}</p>   
                    </div>
                </div>
                <div className="consultas-realizadas">
                    {
                        (currentPatient[0].consultas.length > 0 )
                            ? currentPatient[0].consultas.map(consulta => (
                                <div key={ Math.floor(Math.random() * 999999) }>
                                    <Consulta 
                                        fecha={ formatearFecha(consulta.fecha) }
                                        padecimiento={ consulta.padecimiento }
                                        tratamiento={ consulta.tratamiento }
                                        notas={ consulta.notas } 
                                    />
                                </div>
                            ))
                            : <p>Aún no se ha registrado ninguna consulta</p>
                    }
                </div>
                
            </div>,
        </>,
        document.getElementById('portal')
    )
}