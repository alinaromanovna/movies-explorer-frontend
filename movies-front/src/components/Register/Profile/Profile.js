import React from 'react';
import './Profile.css';
import Header from '../../Header/Header';


function Profile(props) {
    return (
        <section className="profile">
            <Header />
            <div className="user-profile">
                <h2 className="user-profile__welcome">{`Привет, ${props.name}!`}</h2>
                <div className="user-profile__box">
                    <div className="name-item">
                        <span className="name-item__description-text">Имя</span>
                        <span className="name-item__user-data-text">Bdfy</span>
                    </div>
                    <div className="email-item">
                        <span className="email-item__description-text">E-mail</span>
                        <span className="email-item__user-data-text">lalalalala</span>
                    </div>
                </div>
                <button className="user-profile__button user-profile__button_type_edit">Редактировать</button>
                <button className="user-profile__button user-profile__button_type_exit">Выйти из аккаунта</button>
            </div>
        </section>
    )
}
export default Profile;