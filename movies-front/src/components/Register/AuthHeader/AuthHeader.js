import React from 'react';
import { Link } from 'react-router-dom';
import './AuthHeader.css';
import Logo from '../../../images/logo.svg';

function AuthHeader(props) {
    return (
        <header className="auth-header">
            <Link to="/" > <img className="auth-header__logo" src={Logo} alt="logo"></img></Link>
            <h2 className="auth-header__title">{props.title}</h2>
        </header>
    )
}
export default AuthHeader;


