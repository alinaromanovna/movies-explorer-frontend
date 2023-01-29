import React from 'react';
import './PopapMenu.css';
import ProfileIcon from "../../../images/profile"

function PopapMenu() {
    return (
           <main className="popap-menu">
            
               <div className="popap-menu-box">
                    <button className="button-exit"></button>
                    <ul className="burger-menu">
                        <li className="burger-menu__item">Главная</li>
                        <li className="burger-menu__item">Фмльмы</li>
                        <li className="burger-menu__item">Сохраненные фильмы</li>
                    </ul>
                    <a className="profile-link"></a>
                </div>
           </main>
            
           
    )
}
export default PopapMenu;