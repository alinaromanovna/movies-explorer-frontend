import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const Films = [
    {
        id: 1,
        name: '33 слова о дизайне spspspspspsspspspspspspspspspsspspspspspspspssppsspspspspsps',
        time: '1ч 47м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 2,
        name: 'Киноальманах «100 лет дизайна»',
        time: '1ч 3м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 3,
        name: 'В погоне за Бенксиpppppppppppppppppppppppppppppppppppppppppppppppp',
        time: '1ч 42м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 4,
        name: 'Баския: Взрыв реальности',
        time: '1ч 21м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 5,
        name: 'Бег это свобода',
        time: '1ч 44м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 6,
        name: 'Книготорговцы',
        time: '1ч 37м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 7,
        name: 'Когда я думаю о Германии ночью',
        time: '1ч 56м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 8,
        name: 'Gimme Danger: История Игги и The Stooge...',
        time: '1ч 59м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 9,
        name: 'Дженис: Маленькая девочка грустит',
        time: '1ч 42м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 10,
        name: 'Соберись перед прыжком',
        time: '1ч 10м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 11,
        name: 'Пи Джей Харви: A dog called money',
        time: '1ч 4м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    }, {
        id: 12,
        name: 'По волнам: Искусство звука в кино',
        time: '1ч 7м',
        poster: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'
    },
]

function MoviesCardList() {
    return (

        <section className="card-list">
            <ul className="cards">{Films.map((film) => (
                <MoviesCard key={film.id}
                    card={film} />
            ))
            }
            </ul>
            <div className="add-button-box">
                <button className="add-button">
                    <span className="add-button__name">Ещё</span>
                </button>
            </div>
        </section>
    )
}

export default MoviesCardList;