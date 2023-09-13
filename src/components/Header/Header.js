import './Header.css';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchBar from '../SearchBar/SearchBar';
import Icons from '../Icons/Icons';

import logo from '../../images/logo-black.svg';
import green from '../../images/green-rectangle.svg';

import {NUMBER} from '../../utils/constants';

function Header() {
    return (
        <>
            <section className='header'>
                <HamburgerMenu />
                <img className='header__img' alt='logo' src={logo}/>
                <p className='header__number'>{NUMBER}</p>
                <SearchBar />
                <div className='header__group'>
                    <img className='header__img-green-top' alt='rectangle' src={green}/>
                    <Icons />
                </div>
            </section>
        </>
    )
}

export default Header;
