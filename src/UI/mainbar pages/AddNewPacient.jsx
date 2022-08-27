import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPacient.css';

export const AddNewPacient = () => {

  const { pacientes} = useContext(Context)

  const [ nombre, setNombre ] = useState('');
  const [ apellido, setApellido ] = useState('');
  const [ dni, setDni ] = useState('');
  const [ edad, setEdad ] = useState('');

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

  const onSubmit = (e) => {
    e.preventDefault()
  }

  

  

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
          onClick={ onSubmit }
        >Añadir</button>
      </form>
      
    </div>
  )
}
