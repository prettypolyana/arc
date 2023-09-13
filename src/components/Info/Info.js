import './Info.css';

import grey from '../../images/grey.svg';
import greenbottom from '../../images/green-bottom.svg';
import big from '../../images/big.svg';
import left from '../../images/left.svg';

import {TITLE} from '../../utils/constants';
import {SUBTITLE} from '../../utils/constants'; 

function Info() {
    return (
        <section className='info'>
                <img className='info__img-grey' alt='strip' src={grey}/>
                <img className='info__img-green-bottom' alt='rectangle' src={greenbottom}/>
                <div className='info__group'>
                    <img className='info__big' alt='photos' src={big}/>
                    <div className='info__texts'>
                        <h1 className='info__title'>{TITLE}</h1>
                        <p className='info__subtitle'>{SUBTITLE}</p>
                        <p className='info__text'>гектар от <br/><span className='info__text-bold'>99000 ₽</span></p>
                    </div>
                    <img className='info__right' alt='photos' src={left}/>
                </div>
        </section>
    )
}

export default Info;