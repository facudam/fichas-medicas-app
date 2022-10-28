import { useContext } from "react";
import { Context } from "../../context/Context";
import { PatientFicha } from "./PatientFicha";

 export const PatientTable = () => { 

    const { state, filtrar } = useContext(Context);

    const pacientesFiltrados = state.filter(paciente => paciente.apellido.toLowerCase().includes(filtrar.toLowerCase()) || paciente.nombre.toLowerCase().includes(filtrar.toLowerCase()) )
    return (
        <>
        <table className="table-ficha">
            <tbody>
                <tr className={`tr-ficha tr-ficha-titles`}>
                    <th className={`td-ficha td-ficha-title`}>DNI</th>
                    <th className={`td-ficha td-ficha-title`}>Nombre completo</th>
                </tr>

                {
                  
                    pacientesFiltrados.map( paciente => ( 
                        <PatientFicha key={ paciente.dni} apellido={ paciente.apellido } nombre={ paciente.nombre } dni={ paciente.dni } paciente={ paciente }/> //pasamos el paciente para poder identificarlo y eliminarlo
                       
                    ) )        
                }
            </tbody>
        </table>
        
        </>
    )
}