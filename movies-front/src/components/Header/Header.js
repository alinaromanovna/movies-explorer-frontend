import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import PopapMenu from './PopapMenu/PopapMenu';

function Header() {
    return (
           <header className="header">
                   <Link to="/" className="link-home"><img className="logo" src={Logo} alt="logo"></img></Link>
                   <Navigation>
                        <NavLink to="/movies" className="navigation__films active-page">Фильмы</NavLink>
                        <NavLink to="/saved-movies" className="navigation__save-films">Сохранённые фильмы</NavLink>
                   </Navigation>
                    <div className="profile-box">
                        <p className="account">Аккаунт</p>
                        <div className="icon"></div>
                    </div>
                    <PopapMenu />
           </header>
    )
}
export default Header;