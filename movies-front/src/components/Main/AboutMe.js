import React from 'react';
import Avatar from '../../images/avatar.jpeg';
import HeaderName from './HeaderName';
import Portfolio from './Portfolio';
import '../../styles/landing/AboutMe.css';


function AboutMe(props) {
    return (
        <section className="about-me">
            <HeaderName />
           <div className="about-me__container">
               <div className="about-me-data">
                    <h3 className="about-me-data__title">Алина</h3>
                    <p className="about-me-data__subtitle">Фронтенд-разработчик, 28 лет</p>
                    <p className="about-me-data__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="social-network">
                        <a className="social-network__link" href='*'>Facebook</a>
                        <a className="social-network__link" href='*'>Github</a>
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