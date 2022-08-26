import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPacient.css';

export const AddNewPacient = () => {

  const { pacientes} = useContext(Context)

  console.log(pacientes)

  return (
    <div className="add-page">
      <p className='add-page__paragraph'>Ingrese los datos del nuevo paciente:</p>

      <form className='datos-personales-container'>
        <label for='nombre'>Nombre: </label>
        <input type='text' id='nombre' placeholder='Ingrese aquí los nombres' />

        <label for='apellido'>Apellido: </label>
        <input type='text' id='apellido' placeholder='Ingrese aquí el apellido' />
        
        <label for='dni'>DNI: </label>
        <input type='number' placeholder='Ingrese el número de documento' />

        <label for='edad'>Edad: </label>
        <input type='number' placeholder='Ingresa su edad' /> 

        <button type='submit'>Añadir</button>
      </form>
      
    </div>
  )
}
