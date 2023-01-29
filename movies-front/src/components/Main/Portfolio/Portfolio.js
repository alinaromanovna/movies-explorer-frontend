import React from 'react';
import './Portfolio.css';
import LinkVektor from '../../../images/link_vektor.svg';

function Portfolio(props) {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="link-conntainer">
                <li className="link-container__item">
                    <h3 className="link-container__item-name">Статичный сайт</h3>
                    <a className="link-container__item-link" href="/" target="_blank"><img className="link-container__item-link-img" src={LinkVektor} alt="arrow" href=""></img></a>
                </li>
                <li className="link-container__item">
                    <h3 className="link-container__item-name">Адаптивный сайт</h3>
                    <a className="link-container__item-link" href="https://alinaromanovna.github.io/russian-travel/index.html" target="_blank"><img className="link-container__item-link-img" src={LinkVektor} alt="arrow" href=""></img></a>
                </li>
                <li className="link-container__item">
                    <h3 className="link-container__item-name">Одностраничное приложение</h3>
                    <a className="link-container__item-link" href="https://github.com/alinaromanovna/react-mesto-api-full" target="_blank"><img className="link-container__item-link-img" src={LinkVektor} alt="arrow" href=""></img></a>
                </li>
            </ul>
        </div>
    )
}
export default Portfolio;