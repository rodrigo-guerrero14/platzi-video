import '../../assets/styles/components/header.scss'
import image_platzi_logo from '../../assets/images/logo-platzi-video.png'
import image_user_icon from '../../assets/images/user-icon.png'

export default function Header(){
    return(
        <header className="header">
            <img src={image_platzi_logo} className="header__img" alt="platzi video logo" title="Platzi logo" />

            <nav className="header__menu">

                <div className="header__menu--profile">
                    <img src={image_user_icon} alt="icon user" />
                    <p>Perfil</p>
                </div>

                <ul>
                    <li><a>Cuenta</a></li>
                    <li><a>Cerrar Sesión</a></li>
                </ul>
            </nav>
        </header>   
    )
}