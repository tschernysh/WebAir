import React from 'react';
import R from './Reviews.module.css';
import Reviews_Konstantin from '../image/Reviews_Konstantin.png';
import Reviews_Anna from '../image/Reviews_Anna.png';
import Reviews_Tom from '../image/Reviews_Tom.png';
import Reviews_Switch_1 from '../image/Reviews_Switch_1.png';
import Reviews_Switch_2 from '../image/Reviews_Switch_2.png';
import O from "../Offers/Offers.module.css";

const Reviews = () => {
    return <section className={R.Reviews}>
        <div className={R.Reviews_text}>
            ОТЗЫВЫ НАШИХ КЛИЕНТОВ
        </div>
        <div className={R.content}>
            <div className={R.switch1}>
                <img src={Reviews_Switch_1}/>
            </div>
            <div className={R.element_Konstantin}>
                <img src={Reviews_Konstantin}/>
                <div className={R.Reviews_text_1}>КОНСТАНТИН <br></br>СВАДЕБНЫЙ ФОТОГРАФ</div>
                <div className={R.Reviews_description_1}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
            <div className={R.element_Anna}>
                <img src={Reviews_Anna}/>
                <div className={R.Reviews_text_2}>АННА <br></br>TOP МЕНЕДЖЕР ФИРМЫ "NEGIX"</div>
                <div className={R.Reviews_description_2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
            <div className={R.element_Tom}>
                <img src={Reviews_Tom}/>
                <div className={R.Reviews_text_3}>ТОМАС <br></br>ГРАФИЧЕСКИЙ ДИЗАЙНЕР</div>
                <div className={R.Reviews_description_3}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
            <div className={R.switch2}>
                <img src={Reviews_Switch_2}/>
            </div>
        </div>
    </section>
}

export default Reviews;