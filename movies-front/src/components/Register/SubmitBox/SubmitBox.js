import React from 'react';
// import Link from 'react-router-dom';
import './SubmitBox.css';
// import { Children } from 'react';


function SubmitBox ({button, text, children}) {
    return (
    <div className="submit-box">
        <button className="submit-box__button">{button}</button>
        <div className="auth-question">
            <p className="auth-question__text">{text}</p>
            {children}
        </div>
    </div>
    )
}
export default SubmitBox;