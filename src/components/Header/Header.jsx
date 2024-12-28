import './Header.scss';
import logo from "../../img/icone.png";

const Header = () => {
    return (
        <div className='nav-bar'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="link">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Local</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
