import React from 'react';
import O from './Offers.module.css';
import Offer_seal from '../image/Offer_seal.png';
import Offer_lettering from '../image/Offer_lettering.png';
import Offer_office from '../image/Offer_office.png';
import Offer_design from '../image/Offer_design.png';

const Offer = () => {
    return <section className='Offer'>
        <div className={O.Offer_text}>
            <p>НАШИ ПРЕДЛОЖЕНИЯ</p>
        </div>
        <div className={O.Offer_content}>
            <div className={O.test}>
                <div className={O.Offer_element1}>
                    <img className={O.Seal_image} src={Offer_seal}/>
                    <div className={O.Offer_seal}>ШИРОКОФОРМАТНАЯ <br></br>ПЕЧАТЬ</div>
                </div>
                <div className={O.Offer_element3}>
                    <img src={Offer_office}/>
                    <div className={O.Offer_office}>ОФИСНАЯ <br></br>ПЕЧАТЬ</div>
                </div>
            </div>
            <div className={O.test}>
                <div className={O.Offer_element2}>
                    <img src={Offer_lettering}/>
                    <div className={O.Offer_lettering}>ТИСНЕНИЕ И <br></br>КОНГРЕВ</div>
                </div>
                <div className={O.Offer_element4}>
                    <img src={Offer_design}/>
                    <div className={O.Offer_design}>ДИЗАЙН И <br></br>РАЗРАБОТКА</div>
                </div>
            </div>
        </div>
    </section>
}

export default Offer;