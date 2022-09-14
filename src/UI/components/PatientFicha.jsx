import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPatient.css';

export const PatientFicha = ({ apellido, nombre, dni }) => {

  const { deletePatient } = useContext(Context)

  return (
    <tr className='tr-ficha'>
      <td className='td-ficha'>
        { dni }
      </td>
      <td className='td-ficha'>
          { `${apellido}, ${nombre}` }
      </td>
      <td className={`td-ficha center`}>
          <button className='btn-ficha'>Agregar consultas</button>
          <button
            onClick={ deletePatient }
            className='btn-ficha-delete' 
            title="Eliminar paciente">
            x
            </button>
      </td>
    </tr>
  )
}
