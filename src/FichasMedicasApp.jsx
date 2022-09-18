import { Routes, Route, Navigate } from 'react-router-dom';
import { ContextProvider } from './context/ContextProvider';
import { Header } from './UI/Header';
import { AddNewPatient } from './UI/mainbar pages/AddNewPatient';
import { Patients } from './UI/mainbar pages/Patients';
import { Sidebar } from './UI/Sidebar';

export const FichasMedicasApp = () => {
  return (
    <ContextProvider>
      <Header />

      <div className='body-app'>
        <Sidebar />

        <Routes>
          <Route path='/' element={ <Patients /> }/>
          <Route path='/agregar-paciente' element={ <AddNewPatient /> } />

          <Route path='/*' element={ <Navigate to='/'/> } />
        </Routes>
      </div>
      
    </ContextProvider>
  )
}
