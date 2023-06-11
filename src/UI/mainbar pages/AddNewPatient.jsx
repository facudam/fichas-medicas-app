import { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPatient.css';
import { ModalError } from '../modales/ModalError';
import { ModalSuccess } from '../modales/ModalSuccess';

export const AddNewPatient = () => {

  const {  addPatient, nombre, setNombre, apellido, setApellido,  dni, setDni,  edad, setEdad, handleApellido, handleDni, handleEdad, handleName, telefono, setTelefono, handleTelefono, email, setEmail, handleEmail, currentPatient, isUpdatingDataActive, setIsUpdatingDataActive, updatePatientData } = useContext(Context)

  useEffect(() => {
    if (isUpdatingDataActive) {
      setApellido(currentPatient[0].apellido)
      setDni(currentPatient[0].dni)
      setEdad(currentPatient[0].edad)
      setEmail(currentPatient[0].email)
      setNombre(currentPatient[0].nombre)
      setTelefono(currentPatient[0].telefono)
    } else {
      setApellido('')
      setDni('')
      setEdad('')
      setEmail('')
      setNombre('')
      setTelefono('')
    }
  }, [])

  const handlePatientState = (e) => {
    e.preventDefault()
    if (isUpdatingDataActive) {
      currentPatient[0].nombre = nombre;
      currentPatient[0].apellido = apellido;
      currentPatient[0].edad = edad;
      currentPatient[0].dni = dni;
      currentPatient[0].telefono = telefono;
      currentPatient[0].email = email;
      const dataActualizada = currentPatient[0];
      updatePatientData(dataActualizada)
    } else {
      addPatient(e)
    }
  }
  return (
    <section className="add-page">
      <div className='add-page-main'>
        <form className='datos-personales-container'>
          <h1>Registro de Nuevo Paciente</h1>
          <div className='flex-container'>
            <div className='flex-container__box'>
              <label className='label' htmlFor='nombre'>Nombre: <span className='obligatorio'>*</span> </label>
              <input className='input' type='text' value={ nombre } onChange={ handleName } id='nombre' placeholder='Ingrese aquí los nombres' />

              <label className='label' htmlFor='apellido'>Apellido: <span className='obligatorio'>*</span></label>
              <input className='input' type='text' value={ apellido } onChange={ handleApellido } id='apellido' placeholder='Ingrese aquí el apellido' />
        
              <label className='label' htmlFor='dni'>DNI: <span className='obligatorio'>*</span></label>
              <input className='input' type='number' value={ dni } onChange={ handleDni } placeholder='Ingrese el número de documento' />
            </div>

            <div className='flex-container__box'>
              <label className='label' htmlFor='edad'>Edad: <span className='obligatorio'>*</span></label>
              <input className='input' type='number' value={ edad } onChange={ handleEdad } placeholder='Ingresa su edad'/> 

              <label className='label' htmlFor='telefono'>Teléfono:</label>
              <input className='input' type='tel' value={ telefono } onChange={ handleTelefono } placeholder='Ingrese n° de teléfono'/>

              <label className='label' htmlFor='email'>E-mail:</label>
              <input className='input' type='email' value={ email } onChange={ handleEmail } placeholder='Ingrese el correo electrónico' />
            </div>
          </div>
        

          <button 
            className= {`btn-ficha button`}
            type='submit'
            onClick={ handlePatientState }
          >{ isUpdatingDataActive ? 'Modificar' : 'Añadir'}</button>
        </form>

        <ModalSuccess mensaje={ isUpdatingDataActive ? '¡Datos modificados correctamente!' :'¡Paciente añadido correctamente!'} />
        <ModalError />
      
      </div>
    </section>
    
  )
}
