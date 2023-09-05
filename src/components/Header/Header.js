import './Header.css';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchBar from '../SearchBar/SearchBar';
import Icons from '../Icons/Icons';

import logo from '../../images/logo-black.svg';
import green from '../../images/green-rectangle.svg';
import grey from '../../images/grey.svg';
import greenbottom from '../../images/green-bottom.svg';
import big from '../../images/big.svg';
import left from '../../images/left.svg';

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
                <img className='header__img-grey' alt='strip' src={grey}/>
                <img className='header__img-green-bottom' alt='rectangle' src={greenbottom}/>
                <img className='header__big' alt='photos' src={big}/>
                <img className='header__left' alt='photos' src={left}/>
            </section>
        </>
    )
}

export default Header;
