import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPacient.css';

export const AddNewPacient = () => {

  const { pacientes} = useContext(Context)

  console.log(pacientes)

  return (
    <div className="add-page">
      AddNewPacient
      

    </div>
  )
}
