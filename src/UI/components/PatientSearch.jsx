import '../../UI styles/PatientSearch.css';

export const PatientSearch = () => {
  return (
    <div>
        <h1 className='search-title'>Lista de pacientes</h1>

        <form className='search-form'>
            <input className='search-patient' type='search' placeholder='Buscar paciente'/>
            <button
              type='submit' 
              className='button-search'>
              <img src='/imagesUI/lupa.svg' alt='buscar' />
            </button>
            
        </form>
    </div>
  )
}
