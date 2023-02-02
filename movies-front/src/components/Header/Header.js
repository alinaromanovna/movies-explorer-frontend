import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import PopapMenu from './PopapMenu/PopapMenu.js';

function Header() {

    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = React.useState(false);

    function handleOpenBurger() {
        setIsOpenBurgerMenu(true);
    }

    function handleCloseBurger() {
        setIsOpenBurgerMenu(false);
    }



    return (
        <>
            <header className="header">
                <Link to="/" className="link-home"><img className="logo" src={Logo} alt="logo"></img></Link>
                <Navigation>
                    <NavLink to="/movies" className="navigation__films" activeClassName="active-page">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="navigation__save-films" activeClassName="active-page">Сохранённые фильмы</NavLink>
                </Navigation>
                <Link to="/profile" className="profile-box">
                    <p className="account">Аккаунт</p>
                    <div className="icon"></div>
                </Link>
                <button className="burger-menu" onClick={handleOpenBurger}></button>
            </header>
            <PopapMenu isOpen={isOpenBurgerMenu} onClose={handleCloseBurger} />
        </>
    )
}
export default Header;