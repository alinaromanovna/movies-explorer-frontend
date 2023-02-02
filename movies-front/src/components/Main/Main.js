import React from 'react';
import './Main.css';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';


function Main() {
    return (
        <>
            <main className="main">
                <Promo>
                    <NavLink to="/signup" className="auth__signup">Регистрация</NavLink>
                    <NavLink to="/signin" className="auth__signin">Войти</NavLink>
                </Promo>
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </>
    )
}

export default Main;