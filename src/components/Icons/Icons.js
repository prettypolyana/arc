import './Icons.css';

import mail from '../../images/mail.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import whatsapp from '../../images/whatsapp.svg';

function Icons() {
    return (
        <nav className='icons__nav'>
            <a className='icons__item' href='#'>
                <img className='icons__img' src={mail} alt=''/>
            </a>
            <a className='icons__item' href='#'>
                <img className='icons__img' src={vk} alt='' href='' />
            </a>
            <a className='icons__item' href='#'>
                <img className='icons__img' src={telegram} alt='' href='' />
            </a>
            <a className='icons__item' href='#'>
                <img className='icons__img' src={whatsapp} alt='' href='' />
            </a>
        </nav>
    )
}

export default Icons;