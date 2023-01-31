import React from 'react';
import './SearchForm.css';
import SearchButton from '../../../images/search-button.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
    return (
        <section className="search">
            <form className="search-form">
                <div className="search-line">
                    <input className="search-line__input" placeholder="Фильм" type="text" name="film" placrholder="Фильм" id="film" />
                    <div className="search-line__submit">
                        <button className="search-line__submit-button" type="submit" ><img className="search-line__submit-button-img" src={SearchButton}></img></button>
                    </div>
                </div>
                <div className="search-form__chechbox">
                    <FilterCheckbox />
                </div>
            </form>
        </section>
    )
}
export default SearchForm;