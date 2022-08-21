import '../UI styles/BodyApp.css';


export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className='link'>
            <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-256.png' />
            <a href="#">Pacientes</a>
        </div>

        <div className='link'>
        <img src='https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Circle_Plus-256.png' />
            <a href="#">Ingresar nuevo</a>
        </div>
        
        
    </div>
  )
}

