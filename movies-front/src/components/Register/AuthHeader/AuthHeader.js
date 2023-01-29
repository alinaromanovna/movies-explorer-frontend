import React from 'react';
import './AuthHeader.css';
import Logo from '../../../images/logo.png';

function AuthHeader(props) {
    return (
    <header className="auth-header"> 
        <img className="auth-header__logo" src={Logo} alt="logo"></img>
        <h2 className="auth-header__title">{props.title}</h2>
    </header>
    )
}
export default AuthHeader;


