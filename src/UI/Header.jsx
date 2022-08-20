import '../UI styles/Header.css';


export const Header = () => {
  return (
    <header>
        <div className='header'>
            <img className="header__img" src='https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_960_720.png' alt='logo' />
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Pacientes</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
