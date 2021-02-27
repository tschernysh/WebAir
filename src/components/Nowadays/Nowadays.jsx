import React from "react";
import N from './Nowadays.module.css';
import Nowadays_area from '../image/Nowadays_area.png';
import Nowadays_exp from '../image/Nowadays_exp.png';
import Nowadays_realisation from '../image/Nowadays_realisation.png';
import Nowadays_supp from '../image/Nowadays_supp.png';

const Nowadays = () => {
    return <section className={N.Nowadays}>
        <div className={N.Nowadays_text}>
            LOREM <h1>СЕГОДНЯ</h1>
        </div>
        <div className={N.Nowadays_content}>
            <div className={N.Nowadays_column_1}>
                <img className={N.Nowadays_img1} src={Nowadays_exp}/>
                <div className={N.Nowadays_text1}>
                    25 <p>лет опыта на рынке</p>
                </div>
            </div>
            <div className={N.Nowadays_column_2}>
                <div className={N.Nowadays_element_1}>
                    <img className={N.Nowadays_img2} src={Nowadays_realisation}/>
                    <div className={N.Nowadays_text2}>
                        <p1> реализовано</p1> 2000+ <p>проектов</p>
                    </div>
                </div>
                <div className={N.Nowadays_element_2}>
                    <img src={Nowadays_supp}/>
                    <div className={N.Nowadays_text3}>
                        24/7 <p2>поддержка и реализации идей</p2>
                    </div>
                </div>
            </div>
        </div>
        <div className={N.Nowadays_column_3}>
            <img src={Nowadays_area}/>
        </div>
    </section>
}

export default Nowadays;