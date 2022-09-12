import '../../UI styles/AddNewPatient.css';

export const PatientFicha = ({ apellido, nombre, dni }) => {

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
          <button className='btn-ficha-delete' title="Eliminar paciente">x</button>
      </td>
    </tr>
  )
}
