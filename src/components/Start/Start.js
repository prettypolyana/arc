import './Start.css';

import {START_TITLE} from '../../utils/constants';
import {START_SUBTITLE} from '../../utils/constants'; 

function Start () {
    return (
        <section className='start'>
            <p className='start__title'>{START_TITLE}</p>
            <p className='start__subtitle'>{START_SUBTITLE}</p>
        </section>
    )
}

export default Start;