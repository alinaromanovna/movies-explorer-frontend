import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies() {
    return (
        <>
        <Header />
        <div className="saved-movies">
        <SearchForm />
        <MoviesCardList>
            
        </MoviesCardList>
        </div>
        <Footer />
        </>
    )
}
    
export default SavedMovies;