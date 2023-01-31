import React from 'react';
import { useLocation} from 'react-router-dom';
import Like from '../../../images/like.png';
import NoLike from '../../../images/no-like.svg';
import './MoviesCard.css'

function MoviesCard(props) {
    const location = useLocation();
    const [isLiked, setIsLiked] = React.useState(false);

    function saveCard() {
        setIsLiked(true);
    }

    function deleteCard() {

    }

    return (

<li className="card">
    <img className="card__foto" src={props.card.poster} alt={props.card.name}></img>
    <div className="card__bottom">
        <div className="description-card">
            <h2 className="description-card__film-name">{props.card.name}</h2>
            <span className="description-card__film-time">{props.card.time}</span>
        </div>
        {location.pathname ==='/saved-movies' ? 
        <button className="card-button card-button__delete" onClick={deleteCard}></button>
        : 
        <button className="card-button card-button__save" onClick={saveCard}>
        <img className="card-button__img" src={isLiked ? Like : NoLike}  alt={location.pathname ==='/saved-movies' ? "" : 'like'}>
            </img>
        </button>
        }
        
        
        
    </div>
</li>
    )
}
    
export default MoviesCard;