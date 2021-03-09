import React from 'react'
import arrowDown from '../../assets/images/Vector.svg'
import mainBg from '../../assets/images/mainBg.png'
import s from './Main.module.css'


const Main = () => {
    return (
        <section>


            <div className={s.main__background}>
                <img draggable='false' src={mainBg} />
            </div>

            <div className={s.main__content}>
                <div className={s.main__title}>
                    <div className={s.title__top}>
                        Мы печатаем <span>25</span> лет
                    </div>
                    <div className={s.title__bot}>
                        Типография полного цикла
                    </div>
                </div>

                <div className={s.main__btn}>
                    <div className={s.btn__text}>Антикризисные <br /> цены</div>
                    <img src={arrowDown} />
                </div>
            </div>

        </section>
    )
}

export default Main;