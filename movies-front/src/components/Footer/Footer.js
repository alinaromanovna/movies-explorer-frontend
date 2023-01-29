import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
                <p className="footer__sign">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer-bottom">
                   <span className="footer-bottom__year">© 2023</span>
                   <div className="footer-bottom-link">
                        <a className="footer-bottom-link__item" target="_blank" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                        <a className="footer-bottom-link__item" target="_blank" href="https://github.com/alinaromanovna">Github</a>
                        <a className="footer-bottom-link__item" target="_blank" href="https://ru-ru.facebook.com/">Facebook</a>
                   </div>
               </div>
        </footer>
    )
}
export default Footer;