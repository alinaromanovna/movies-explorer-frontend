import React from 'react';
import './SearchForm.css';
import SearchButton from '../../../images/find-button.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
    return (
        <section className="search">
            <form className="search-form">
                <div className="search-line">
                    <input className="search-line__input" placeholder="Фильм" type="text" name="film" id="film" required/>
                    <div className="search-line__submit">
                        <button className="search-line__submit-button" type="submit" ><img className="search-line__submit-button-img" src={SearchButton} alt="search"></img></button>
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