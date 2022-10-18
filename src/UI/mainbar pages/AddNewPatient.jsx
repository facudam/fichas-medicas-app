import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPatient.css';
import { ModalError } from '../modales/ModalError';
import { ModalSuccess } from '../modales/ModalSuccess';

export const AddNewPatient = () => {

  const {  addPatient, nombre, apellido, dni, edad, handleApellido, handleDni, handleEdad, handleName, telefono, handleTelefono } = useContext(Context)


  return (
    <div className="add-page">
      <p className='add-page__paragraph'>Ingrese los datos del nuevo paciente:</p>

      <form className='datos-personales-container'>
        <label className='label' htmlFor='nombre'>Nombre: </label>
        <input className='input' type='text' value={ nombre } onChange={ handleName } id='nombre' placeholder='Ingrese aquí los nombres' />

        <label className='label' htmlFor='apellido'>Apellido: </label>
        <input className='input' type='text' value={ apellido } onChange={ handleApellido } id='apellido' placeholder='Ingrese aquí el apellido' />
        
        <label className='label' htmlFor='dni'>DNI: </label>
        <input className='input' type='number' value={ dni } onChange={ handleDni } placeholder='Ingrese el número de documento' />

        <label className='label' htmlFor='edad'>Edad: </label>
        <input className='input' type='number' value={ edad } onChange={ handleEdad } placeholder='Ingresa su edad' /> 

        <label className='label' htmlFor='telefono'>Teléfono:</label>
        <input className='input' type='tel' value={ telefono } onChange={ handleTelefono } placeholder='Ingrese n° de teléfono' />

        <button 
          className='button'
          type='submit'
          onClick={ addPatient }
        >Añadir</button>
      </form>

      <ModalSuccess mensaje={'¡Usuario añadido correctamente!'} />
      <ModalError mensaje={'¡Error! Por favor completa todos los datos del paciente'} />
      
      
    </div>
  )
}
