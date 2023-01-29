import React from 'react';
import promoWebCircle from '../../../images/promo-web-circle.png';
import './Promo.css';
import Logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';


function Promo(props) {
    return (
        <section className="promo">
            <div className="promo__header">
                <Link to="/" className="link-home"><img src={Logo} className="logo" alt="logo"></img></Link>
                <nav className="auth">
                    {props.children}
                </nav>
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
            <div className="learn-more">
                <button className="learn-more__button">Узнать больше</button>
            </div>
        </section>
           )
}
export default Promo;