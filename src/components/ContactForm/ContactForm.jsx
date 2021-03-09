import React from "react";
import s from "./ContactForm.module.css"

const ContactForm = (props) => {
    return(
        <section>
            <div className={s.contact__block}>
                <div className={s.contact__text}>
                    <div className={s.contact__text_top}>остались вопросы?</div>
                    <div className={s.contact__text_bot}>оставьте заявку и наш менеджер свяжеться с вами в течении 60 минут</div>
                </div>
                <div className={s.contact__form}>
                    <form action="">
                        <div className={s.contact__input_piece}>
                            <div>Фио</div>
                            <input type='text'/>
                        </div>

                        <div className={s.contact__input_piece}>
                            <div>ваш телефон</div>
                            <input type='text'/>
                        </div>

                        <div className={s.contact__input_piece}>
                            <div>ваш e-mail</div>
                            <input type='text'/>
                        </div>

                        <div className={s.contact__input_textarea }>
                            <div>Текст заявки</div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className={s.contact__input_submit}>
                            <input value='Відправити' type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm