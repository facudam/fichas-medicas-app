import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPatient.css';

export const AddNewPatient = () => {

  const {  addPatient, nombre, apellido, dni, edad, handleApellido, handleDni, handleEdad, handleName } = useContext(Context)


  return (
    <div className="add-page">
      <p className='add-page__paragraph'>Ingrese los datos del nuevo paciente:</p>

      <form className='datos-personales-container'>
        <label htmlFor='nombre'>Nombre: </label>
        <input type='text' value={ nombre } onChange={ handleName } id='nombre' placeholder='Ingrese aquí los nombres' />

        <label htmlFor='apellido'>Apellido: </label>
        <input type='text' value={ apellido } onChange={ handleApellido } id='apellido' placeholder='Ingrese aquí el apellido' />
        
        <label htmlFor='dni'>DNI: </label>
        <input type='number' value={ dni } onChange={ handleDni } placeholder='Ingrese el número de documento' />

        <label htmlFor='edad'>Edad: </label>
        <input type='number' value={ edad } onChange={ handleEdad } placeholder='Ingresa su edad' /> 

        <button 
          type='submit'
          onClick={ addPatient }
        >Añadir</button>
      </form>
      
    </div>
  )
}
