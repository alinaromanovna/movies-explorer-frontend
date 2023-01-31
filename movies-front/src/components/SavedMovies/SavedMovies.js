import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import PopapMenu from '../Header/PopapMenu/PopapMenu';


function SavedMovies() {
    return (
        <>
        <Header />
        <main className="saved-movies">
        <SearchForm />
        <MoviesCardList>
            
        </MoviesCardList>
        </main>
        <Footer />
        </>
    )
}
    
export default SavedMovies;