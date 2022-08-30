
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


    const addPatient = ( e ) => {
        e.preventDefault();

        if ( nombre.trim().length > 1 && apellido.trim().length > 1 && dni.trim().length > 1 && edad.trim().length > 0 ) {
            const newPatient = { nombre: nombre, apellido: apellido, dni: dni, edad: edad}

            dispatch({
                type: PatientActions.ADD_PATIENT,
                payload: newPatient
            })
            // Si posee todos los datos, entonces aparecerá el modal, sino no.
            setModalIsOpen(true)

        } else {
            console.warn('DEBES INGRESAR TODOS LOS DATOS DEL PACIENTE')
        }

        

    }


    const [ state, dispatch ] = useReducer( patientsReducer, initialState );


    return(
        <Context.Provider  value={{ state, addPatient, nombre, apellido, dni, edad, handleApellido, handleDni, handleEdad, handleName, modalIsOpen, setModalIsOpen }} >
            { children }
        </Context.Provider>
    )
}