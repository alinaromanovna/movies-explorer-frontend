import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <section className="footer">
                <p className="footer__sign">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer-bottom">
                   <span className="footer-bottom__year">© 2022</span>
                   <div className="footer-bottom-link">
                        <a className="footer-bottom-link__item" href="/">Яндекс.Практикум</a>
                        <a className="footer-bottom-link__item" href="/">Github</a>
                        <a className="footer-bottom-link__item" href="/">Facebook</a>
                   </div>
               </div>
        </section>
    )
}
export default Footer;