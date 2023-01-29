import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
           <main className="not-found">
            
               <div className="not-found-box">
                    <h2 className="not-found-box__title">404</h2>
                    <p className="not-found-box__subtitle">Страница не найдена</p>
                </div>
                
            <Link to="/" className="not-found__exit">Назад</Link>
           </main>
            
           
    )
}
export default NotFound;