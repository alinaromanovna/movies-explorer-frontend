import React from 'react';
import promoWebCircle from '../../images/promo-web-circle.png';
import '../../styles/landing/Promo.css';
import Logo from '../../images/logo.png';


function Promo(props) {
    return (
        <section className="promo">
            <div className="promo__header">
                <img src={Logo} className="logo" alt="logo"></img>
                <div className="auth">
                    <a className="auth__signup" href="/">Регистрация</a>
                    <button className="auth__signin">Войти</button>   
                </div>
            </div>
           <div className="promo__description">
               <div className="info">
                    <h1 className="info__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="info__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
               </div>
               <div className="wed-circle">
                   <img src={promoWebCircle} className="web-circle_img" alt="web-circle"></img>
               </div>
            </div>
            <button className="learn-more">Узнать больше</button> 
        </section>
    )
}
export default Promo;