import './HamburgerMenu.css';
import logo from '../../images/logo.svg'

import '../../vendor/fonts/fonts.css'; 

function HamburgerMenu() {
    return (
        <div className='toggle__hamburger'>
            <input className='toggle__menu' type='checkbox' id='toggle__menu'/>
            <label className='toggle__button' htmlFor='toggle__menu'>
                <span></span>
            </label>
            <div className='toggle__content'>
                <img className='toggle__logo' src={logo} alt='logo'/>
                    <ul className='toggle__box'>
                        <li className='toggle__item'><a className="toggle__link" href=''>О компании</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Наши посёлки</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Цены</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Уникальные участки</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>География работы</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Готовые решения</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Линейки домов</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Бизнес-планы</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Сервисная компания</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Новости проекты</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Успешные фермеры</a></li>
                        <li className='toggle__item'><a className="toggle__link" href=''>Контакты</a></li>
                    </ul>
            </div>
        </div>
    )
}

export default HamburgerMenu;