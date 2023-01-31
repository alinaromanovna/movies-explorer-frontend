import React from 'react';
import './PopapMenu.css';
import { Link, NavLink } from 'react-router-dom';


function PopapMenu(props) {


    return (
        <div className={`${props.isOpen ? 'popap-menu_opened' : 'popap-menu_closed'}`}>

            <div className="popap-menu-box">
                <button className="button-exit" onClick={props.onClose}></button>
                <nav className="popap-menu">
                    <NavLink to="/" exact className="popap-menu__link" activeClassName="burger-menu__link-active">Главная</NavLink>
                    <NavLink to="/movies" className="popap-menu__link" activeClassName="burger-menu__link-active">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="popap-menu__link" activeClassName="burger-menu__link-active">Сохраненные фильмы</NavLink>
                </nav>
                <Link to="/profile" className="profile-link">Аккаунт</Link>
            </div>
        </div>


    )
}
export default PopapMenu;