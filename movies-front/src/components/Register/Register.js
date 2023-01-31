import React from 'react';
import { Link } from "react-router-dom";
import './Register.css';
import AuthHeader from './AuthHeader/AuthHeader';
import SubmitBox from './SubmitBox/SubmitBox';


function Register(props) {
    return (
        <section className="register">
            <div className="register-box">
                <AuthHeader title={'Добро пожаловать!'} />
                <main>
                    <form className="register-form">
                        <label className="register-form__label" htmlFor="name">Имя</label>
                        <input className="register-form__input" type="text" id="name" name="name" required></input>
                        <span className="register-form__error"></span>
                        <label className="register-form__label" htmlFor="email">E-mail</label>
                        <input className="register-form__input" type="text" id="email"></input>
                        <span className="register-form__error"></span>
                        <label className="register-form__label" htmlFor="password">Пароль</label>
                        <input className="register-form__input" type="text" id="password"></input>
                        <span className="register-form__error register-form__error_type_active"></span>
                    </form>
                    <SubmitBox button={'Зарегистрироваться'} text={'Уже зарегистрированы?'}>
                        <Link to="/signin" className="auth-question__link">Войти</Link>
                    </SubmitBox>
                </main>
            </div>
        </section>
    )
}
export default Register;