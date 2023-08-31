import './Header.css';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import logo from '../../images/logo-black.svg';

function Header() {
    return (
        <>
            <section className='header'>
                <HamburgerMenu />
                <img className='header__img' alt='logo' src={logo}/>
            </section>
        </>
    )
}

export default Header;
