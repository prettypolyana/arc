import './Header.css';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import logo from '../../images/logo-black.svg';
import search from '../../images/Search.svg';

import {NUMBER} from '../../utils/constants';

function Header() {
    return (
        <>
            <section className='header'>
                <HamburgerMenu />
                <img className='header__img' alt='logo' src={logo}/>
                <p className='header__number'>{NUMBER}</p>
                <img className='header__search' alt='search' src={search}/>
            </section>
        </>
    )
}

export default Header;
