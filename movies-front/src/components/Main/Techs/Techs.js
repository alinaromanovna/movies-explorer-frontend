import React from 'react';
import HeaderName from '../HeaderName/HeaderName';
import './Techs.css';
const techs = [{
    id: 1,
    name: 'HTML',
}, {
    id: 2,
    name:'CSS',
}, {
    id: 3,
    name: 'JS',
}, {
    id: 4,
    name: 'React',
}, {
    id: 5,
    name: 'Git',
}, {
    id: 6,
    name: 'Express.js',
}, {
    id: 7,
    name: 'mongoDB'
}]

function Techs(props) {
    return (
       <section className="techs">
           <HeaderName title="Технологии"/>
           <div className="techs-info">
                <h2 className="techs-info__title">7 технологий</h2>
                <p className="techs-info__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs-info__stack">
                {techs.map((tech) => (
                    <div key={tech.id} className="techs-info__stack-name">{tech.name}</div>
                ))
                }
                </div>
           </div>
       </section> 
    )
}
export default Techs;