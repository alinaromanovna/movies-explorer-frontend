import React from 'react';
import Avatar from '../../../images/avatar.jpeg';
import HeaderName from '../HeaderName/HeaderName';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';


function AboutMe(props) {
    return (
        <section className="about-me">
            <HeaderName title="Студент" />
            <div className="about-me__container">
                <div className="about-me-data">
                    <h3 className="about-me-data__title">Алина</h3>
                    <p className="about-me-data__subtitle">Фронтенд-разработчик, 28 лет</p>
                    <p className="about-me-data__description">Я родилась в Санкт-Петербурге, закончила механический факультет Горного университета по специальности логистика. У меня есть муж и мы вместе безумно любим путешествовать и искать новые места для души. Я достаточно разносторонний человек люблю пилатес и сноуборд, узнавать что-то новое всегда интересно. Начала изучать верстку еще работая по специальности на тренажерах, а во времена короновируса убедилась, что мне точно интересно и нужно укреплять свои знания. С 2016 года работала по специальности. После того, как прошла курс по веб-разработке, начала делать свои pet-проекты.</p>
                    <div className="social-network">
                        <a className="social-network__link" href='https://ru-ru.facebook.com/' target="_blank">Facebook</a>
                        <a className="social-network__link" href='https://github.com/alinaromanovna' target="_blank">Github</a>
                    </div>
                </div>
                <div className="avatar">
                    <img src={Avatar} className="avatar_img" alt="avatar"></img>
                </div>
            </div>
            <Portfolio />
        </section>
    )
}
export default AboutMe;