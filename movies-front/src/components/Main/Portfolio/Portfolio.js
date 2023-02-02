import React from 'react';
import './Portfolio.css';
import LinkVektor from '../../../images/link_vektor.svg';

function Portfolio(props) {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="link-container">
                <li className="link-container__item">
                <a className="item-link" href="https://alinaromanovna.github.io/how-to-learn-1/" target="_blank">
                    <h3 className="item-link__name">Статичный сайт</h3>
                    <img className="item-link__img" src={LinkVektor} alt="arrow"></img>
                </a>
                </li>
                <li className="link-container__item">
                <a className="item-link" href="https://alinaromanovna.github.io/russian-travel/index.html" target="_blank">
                    <h3 className="item-link__name">Адаптивный сайт</h3>
                    <img className="item-link__img" src={LinkVektor} alt="arrow"></img>
                </a>
                </li>
                <li className="link-container__item">
                <a className="item-link" href="https://github.com/alinaromanovna/react-mesto-api-full" target="_blank">
                    <h3 className="item-link__name">Одностраничное приложение</h3>
                    <img className="item-link__img" src={LinkVektor} alt="arrow"></img>
                </a>
                </li>
            </ul>
        </div>
    )
}
export default Portfolio;