import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import SubmitBox from '../SubmitBox/SubmitBox';


function Login(props) {
    return (
        <section className="login">
            <div className="login-box">
                <AuthHeader title={'Рады видеть!'} />
                <main className="login__form">
                    <form className="login-form">
                        <label className="login-form__label" htmlFor="name">E-mail</label>
                        <input className="login-form__input" type="text" id="name" name="name" required></input>
                        <span className="login-form__error"></span>
                        <label className="login-form__label" htmlFor="password">Пароль</label>
                        <input className="login-form__input" type="text" id="password"></input>
                        <span className="login-form__error"></span>
                    </form>
                    <SubmitBox button={'Войти'} text={'Ещё не зарегистрированы?'}>
                        <Link to="/signup" className="auth-question__link">Регистрация</Link>
                    </SubmitBox>
                </main>
            </div>
        </section>
    )
}
export default Login;