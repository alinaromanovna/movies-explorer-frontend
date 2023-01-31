import React from 'react';
import HeaderName from '../HeaderName/HeaderName';
import './AboutProject.css';

function AboutProject(props) {
    return (
        <section className="about">
            <HeaderName title={'О проекте'} />
            <div className="description">
                <div className="description-work">
                    <h3 className="description-work__title">Дипломный проект включал 5 этапов</h3>
                    <p className="description-work__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="description-time">
                    <h3 className="description-time__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="description-time__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="timetable">
                <div className="timetable-backend">
                    <p className="timetable-backend__week">1 неделя</p>
                    <span className="timetable-backend__sign">Back-end</span>
                </div>
                <div className="timetable-frontend">
                    <p className="timetable-frontend__week">4 недели</p>
                    <span className="timetable-frontend__sign">Front-end</span>
                </div>
            </div>
        </section>
    )
}
export default AboutProject;