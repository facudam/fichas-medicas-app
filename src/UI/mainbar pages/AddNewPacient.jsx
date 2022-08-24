import { useContext } from 'react';
import { Context } from '../../context/Context';
import '../../UI styles/AddNewPacient.css';

export const AddNewPacient = () => {

  const { river } = useContext(Context)

  return (
    <div className="add-page">
      AddNewPacient
      <p>{ river }</p> 

    </div>
  )
}
