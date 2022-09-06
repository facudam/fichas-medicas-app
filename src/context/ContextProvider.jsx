
import { useReducer, useState } from "react";
import { PatientActions } from "../actions/patientActions";
import { Context } from "./Context"


export const ContextProvider = ({ children }) => {

    //Declaramos los estados para los datos personales de los nuevos pacientes:

    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ dni, setDni ] = useState('');
    const [ edad, setEdad ] = useState('');
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ errorModalIsOpen, setErrorModalIsOpen ] = useState(false)

   

    //Declaramos las funciones con sus respectivos setState para tomar los datos ingresados:

    const handleName = (e) => {
        setNombre(e.target.value)
    }

    const handleApellido = (e) => {
        setApellido(e.target.value)
    }

    const handleDni = (e) => {
        setDni(e.target.value)
    
    }

    const handleEdad = (e) => {
        setEdad(e.target.value)
    }

    //Estado inicial del reducer:
    
    const initialState = { pacientes: []};

    const patientsReducer = (state, action) => {
        switch (action.type) {
            case PatientActions.ADD_PATIENT:
                return { pacientes: [...state.pacientes, action.payload ]} ;
            default:
                return state;
            
        }
    }

    const verifyDni = () => {
        state.pacientes.find( paciente => paciente.dni === dni)
        
    }

    

    const verifyNewPatient = () => {
        if ( state.pacientes.length === 0 && nombre.trim().length > 1 && apellido.trim().length > 1 && dni.trim().length > 1 && edad.trim().length > 0 ) {
            return true;
        }  
         else if ( state.pacientes.length !== 0 && nombre.trim().length > 1 && apellido.trim().length > 1 && dni.trim().length > 1 && verifyDni(dni) === undefined ) {
            return true
        } else { return false }
        
    }

    const addPatient = ( e ) => {
        e.preventDefault();

        if ( verifyNewPatient() ) {
            const newPatient = { nombre: nombre, apellido: apellido, dni: dni, edad: edad }

            dispatch({
                type: PatientActions.ADD_PATIENT,
                payload: newPatient
            })
            // Si posee todos los datos, entonces aparecerá el modal, sino no.
            setModalIsOpen(true)

        } else {
            console.warn('DEBES INGRESAR TODOS LOS DATOS DEL PACIENTE')
            setErrorModalIsOpen(true);
        }

        

    }



    const [ state, dispatch ] = useReducer( patientsReducer, initialState );

console.log(`VerificarPaciente: ${verifyNewPatient()}, 
        verificarDni: ${verifyDni()}
        ${dni}`, typeof dni, typeof verifyDni(), state.pacientes )
    return(
        <Context.Provider  value={{ state, addPatient, nombre, apellido, dni, edad, handleApellido, handleDni, handleEdad, handleName, modalIsOpen, setModalIsOpen, errorModalIsOpen, setErrorModalIsOpen }} >
            { children }
        </Context.Provider>
    )
}