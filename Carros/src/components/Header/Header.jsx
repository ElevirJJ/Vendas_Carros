import './Header.scss';

const Header = () => {
    return (
        <div className='nav-bar'>
            <div className="logo">
                <img src="/public/img/icone.png" alt="logo" />
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
