import React from 'react'
import s from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = (props) => {

    return(
        <header>
            <div className={s.header__logo}>
                <img src={logo} alt=""/>
            </div>
            <a href="">Главная</a>
            <a href="">Предложения</a>
            <a href="">О нас</a>
            <a href="">Отзывы</a>
            <a href="">Контакты</a>
        </header>
    )
}

export default Header;