import React from 'react';
import Like from '../../../images/like.png';
import './MoviesCard.css'

function MoviesCard(props) {
    return (

<li className="card">
    <img className="card__foto" src={props.card.poster} alt={props.card.name}></img>
    <div className="card__bottom">
        <div className="description-card">
            <h2 className="description-card__film-name">{props.card.name}</h2>
            <span className="description-card__film-time">{props.card.time}</span>
        </div>
        <div className="like">
            <img className="like__img" src={Like} alt="like"></img>
        </div>
    </div>
</li>
    )
}
    
export default MoviesCard;