import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './UI/Header';
import { AddNewPacient } from './UI/mainbar pages/AddNewPacient';
import { Pacients } from './UI/mainbar pages/Pacients';
import { Sidebar } from './UI/Sidebar';

export const FichasMedicasApp = () => {
  return (
    <>
      <Header />

      <div className='body-app'>
        <Sidebar />

        <Routes>
          <Route path='/' element={ <Pacients /> }/>
          <Route path='/agregar-paciente' element={ <AddNewPacient /> } />

          <Route path='/*' element={ <Navigate to='/'/> } />
        </Routes>
      </div>
      
    </>
  )
}
