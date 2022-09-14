
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
    
    const initialState = { pacientes: [{nombre: 'Santiago Ismael', apellido: 'Schiavi', dni: 34561298, edad: 23}]};

    const patientsReducer = (state, action) => {
        switch (action.type) {
            case PatientActions.ADD_PATIENT: {
                const nuevoPaciente = action.payload;

                const patientAllreadyAdded = state.pacientes.find(paciente => paciente.dni === nuevoPaciente.dni)

                console.log(`Prueba: ${patientAllreadyAdded}`)

                // Si patientAllReadyAdded es un objeto (o sea que ya se encuentra en el estado), que devuelva el estado como estaba. Sino que lo agregue:

                return patientAllreadyAdded
                    ?  state
                    : { pacientes: [...state.pacientes, action.payload ]}} 
            
            case PatientActions.DELETE_PATIENT:
                return state.pacientes.filter(paciente => paciente.dni !== action.payload)

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
            console.log(initialState)

        } else {
            console.warn('DEBES INGRESAR TODOS LOS DATOS DEL PACIENTE')
            setErrorModalIsOpen(true);
        }

        

    }

    function deletePatient() { 

        dispatch({
            type: PatientActions.DELETE_PATIENT,
            payload: state.dni
        })
    }


    const [ state, dispatch ] = useReducer( patientsReducer, initialState );

        console.log(state)

    return(
        <Context.Provider  value={{ state, addPatient, nombre, apellido, dni, edad, handleApellido, handleDni, handleEdad, handleName, modalIsOpen, setModalIsOpen, errorModalIsOpen, setErrorModalIsOpen, deletePatient }} >
            { children }
        </Context.Provider>
    )
}