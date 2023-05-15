
import { useReducer, useState } from "react";
import { PatientActions } from "../actions/patientActions";
import { Context } from "./Context"


export const ContextProvider = ({ children }) => {

    // Declaramos los estados para los datos personales de los nuevos pacientes:

    const [ nombre, setNombre ] = useState('');
    const [ apellido, setApellido ] = useState('');
    const [ dni, setDni ] = useState('');
    const [ edad, setEdad ] = useState('');
    const [ telefono, setTelefono ] = useState('')
    const [ email, setEmail ] = useState('')

    // Estados para los modales.
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ errorModalIsOpen, setErrorModalIsOpen ] = useState(false)
    const [ addModalIsOpen, setAddModalIsOpen ] = useState(false)
     //Estado para el modal agregarConsulta.
    const [ confirmationModalIsOpen, setConfirmationModalIsOpen ] = useState(false);
    const [ currentPatient, setCurrentPatient ] = useState([{nombre: 'Santiago Ismael', apellido: 'Schiavi', dni: 34561298, edad: 23, telefono: 1525455677, email: 'santiago_schiavi@gmail.com', consultas: []}]);

    // ------ estados para nueva consulta ------- //
    const [ fecha, setFecha ] = useState('')
    const [ padecimiento, setPadecimiento ] = useState('')
    const [ tratamiento, setTratamiento ] = useState('')
    const [ notas, setNotas ] = useState('');

    // ------ Estado del inputSearchPatient ------- //
    const [filtrar, setFiltrar ] = useState('')

    const [ mensajeModal, setMensajeModal ] = useState('')

    


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

    const handleTelefono = (e) => {
        setTelefono(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
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


    const searchPatient = (e) => {
        e.preventDefault()
        setFiltrar(e.target.value)
    }

    //Estado inicial del reducer:
    
    const initialState = [{nombre: 'Santiago Ismael', apellido: 'Schiavi', dni: '34561298', edad: 23, telefono: 1525455677, email: 'santiago_schiavi@gmail.com', consultas: []}, {nombre: 'Fernando Martín', apellido: 'Castro', dni: '34345455', edad: 33, telefono: 1522355444, email: 'fercastro-20@gmail.com', consultas: []}, {nombre: 'Agustina Inés', apellido: 'Prado', dni: '40450054', edad: 20, telefono: 1552455690, email: 'agusprado-ines@gmail.com', consultas: []}];

    const patientsReducer = (state, action) => {
        switch (action.type) {
            case PatientActions.ADD_PATIENT: {
                const nuevoPaciente = action.payload;

                const patientAllreadyAdded = state.find(paciente => paciente.dni === nuevoPaciente.dni)

                // Si patientAllReadyAdded es un objeto (o sea que ya se encuentra en el estado), que devuelva el estado como estaba. Sino que lo agregue:

               if (patientAllreadyAdded) {
                   setMensajeModal('El dni que se introdujo ya corresponde a un paciente en el sistema')
                   setErrorModalIsOpen(true)
                } else {
                    // Si posee todos los datos, entonces aparecerá el modal, sino no.
                    setModalIsOpen(true)
                    return [...state, nuevoPaciente ] }
                      
                return state }

            
            case PatientActions.DELETE_PATIENT:
                return state.filter(paciente => paciente.dni !== action.payload.dni)

            case PatientActions.ADD_CONSULTA:
                
                state.map((paciente) => (
                      (paciente.dni === currentPatient[0].dni) 
                        ?  paciente.consultas = [ action.payload, ...paciente.consultas ]
                        :  null
                    )

                )
                return state
                

            default:
                return state;
            
        }
    }

    

    const addPatient = ( e ) => {
        e.preventDefault();

        const newPatient = { nombre: nombre, apellido: apellido, dni: dni, edad: edad, telefono: telefono, email: email, consultas: []}

        if ( nombre.trim().length > 1 && apellido.trim().length > 1 && dni.trim().length > 1 && edad.trim().length > 0 ) {
            

            dispatch({
                type: PatientActions.ADD_PATIENT,
                payload: newPatient
            })
            
            //Reiniciar a vacio los inputs:
            setApellido('')
            setDni('')
            setEdad('')
            setNombre('')
            setTelefono('')
            setEmail('')

        } else {
            console.warn('DEBES INGRESAR TODOS LOS DATOS DEL PACIENTE')
            setMensajeModal('Debes ingresar todos los datos obligatorios')
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

        const nuevaConsulta = { fecha: fecha, padecimiento: padecimiento, tratamiento: tratamiento, notas: notas }

        dispatch({
            type: PatientActions.ADD_CONSULTA,
            payload: nuevaConsulta
        })

        setFecha('')
        setPadecimiento('')
        setTratamiento('')
        setNotas('')
        setAddModalIsOpen(false)
    }


    const [ state, dispatch ] = useReducer( patientsReducer, initialState );


    return(
        <Context.Provider  value={{ state, addPatient, nombre, apellido, dni, edad, telefono, email, handleTelefono, handleApellido, handleDni, handleEdad, handleName, handleEmail, modalIsOpen, setModalIsOpen, errorModalIsOpen, setErrorModalIsOpen, deletePatient, confirmationModalIsOpen, setConfirmationModalIsOpen, currentPatient, setCurrentPatient, addModalIsOpen, setAddModalIsOpen, fecha, padecimiento, setPadecimiento, tratamiento, setTratamiento, notas, setNotas, handleFecha, handlePadecimiento, handleTratamiento, handleNotas, addConsulta, filtrar, setFiltrar, searchPatient, mensajeModal }} >
            { children }
        </Context.Provider>
    )
}