import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './UI/Header';
import { AddNewPatient } from './UI/mainbar pages/AddNewPatient';
import { FichaActiva } from './UI/mainbar pages/FichaActiva';
import { Patients } from './UI/mainbar pages/Patients';
import { Sidebar } from './UI/Sidebar';

export const FichasMedicasApp = () => {
  return (
    <>
      <Header />

      <div className='body-app'>
        <Sidebar />

        <Routes>
          <Route path='/' element={ <Patients /> }/>
          <Route path='/agregar-paciente' element={ <AddNewPatient /> } />
          <Route path='/ficha-activa' element={<FichaActiva />} />

          <Route path='/*' element={ <Navigate to='/'/> } />
        </Routes>
      </div>
    </> 
 
  )
}
