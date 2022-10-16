
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
    const [ addModalIsOpen, setAddModalIsOpen ] = useState(false)
     //Estado para el modal agregarConsulta.
    const [ confirmationModalIsOpen, setConfirmationModalIsOpen ] = useState(false);
    const [ currentPatient, setCurrentPatient ] = useState([]);

    // ------ estados para nueva consulta ------- //
    const [ fecha, setFecha ] = useState('')
    const [ padecimiento, setPadecimiento ] = useState('')
    const [ tratamiento, setTratamiento ] = useState('')
    const [ notas, setNotas ] = useState('');

   

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


    // Declaramos las funciones con sus respectivos setState para tomar los datos de las consultas:

    const handleFecha = (e) => {
        setFecha(e.target.value)
    }

    const handlePadecimiento = (e) => {
        setPadecimiento(e.target.value)
    }

    const handleTratamiento = (e) => {
        setTratamiento(e.target.value)
    }

    const handleNotas = (e) => {
        setNotas(e.target.value)
    }

    //Estado inicial del reducer:
    
    const initialState = [{nombre: 'Santiago Ismael', apellido: 'Schiavi', dni: 34561298, edad: 23, consultas: []}];

    const patientsReducer = (state, action) => {
        switch (action.type) {
            case PatientActions.ADD_PATIENT: {
                const nuevoPaciente = action.payload;

                const patientAllreadyAdded = state.find(paciente => paciente.dni === nuevoPaciente.dni)

                // Si patientAllReadyAdded es un objeto (o sea que ya se encuentra en el estado), que devuelva el estado como estaba. Sino que lo agregue:

                return patientAllreadyAdded
                    ?  state
                    :  [...state, action.payload ]} 
            
            case PatientActions.DELETE_PATIENT:
                return state.filter(paciente => paciente.dni !== action.payload.dni)

            case PatientActions.ADD_CONSULTA:
                //const pacienteConsulta = state.find(paciente => paciente.dni === //action.payload.paciente.dni);
                console.log(action.payload)

                const pacienteConsulta = action.payload;
                const nuevaConsulta = { fecha: fecha, padecimiento: padecimiento, tratamiento: tratamiento, notas: notas }
                
                const nuevoEstado = state.map((paciente) => {
                     if (paciente.id === pacienteConsulta.id) {
                        paciente.consultas = [  ...paciente.consultas, nuevaConsulta   ]
                    }
                    return paciente
                })

                return nuevoEstado
                //pacienteConsulta.consultas.push(action.payload.nuevaConsulta)

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
            
            //Reiniciar a vacio los inputs:
            setApellido('')
            setDni('')
            setEdad('')
            setNombre('')

        } else {
            console.warn('DEBES INGRESAR TODOS LOS DATOS DEL PACIENTE')
            setErrorModalIsOpen(true);
        }

        

    }

    function deletePatient(paciente) { 
        dispatch({
            type: PatientActions.DELETE_PATIENT,
            payload: {dni: paciente.dni}
        })
        setConfirmationModalIsOpen(false) 
    }

    function addConsulta(e) {
        e.preventDefault()

        dispatch({
            type: PatientActions.ADD_CONSULTA,
            payload: currentPatient
        })

        
    }


    const [ state, dispatch ] = useReducer( patientsReducer, initialState );


    return(
        <Context.Provider  value={{ state, addPatient, nombre, apellido, dni, edad, handleApellido, handleDni, handleEdad, handleName, modalIsOpen, setModalIsOpen, errorModalIsOpen, setErrorModalIsOpen, deletePatient, confirmationModalIsOpen, setConfirmationModalIsOpen, currentPatient, setCurrentPatient, addModalIsOpen, setAddModalIsOpen, fecha, setFecha, padecimiento, setPadecimiento, tratamiento, setTratamiento, notas, setNotas, handleFecha, handlePadecimiento, handleTratamiento, handleNotas, addConsulta }} >
            { children }
        </Context.Provider>
    )
}