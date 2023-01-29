import React from 'react';
import './FilterCheckbox.css';
function FilterCheckbox() {
    return (
        <section className="filter-checkbox">
            <input className="filter-checkbox__button" type="checkbox" id="short-films" name="short-films"/>
            <label className="filter-checkbox__label" htmlfor="short-films"></label>
            <span className="filter-checkbox__sign">Короткометражки</span>
        </section>
    )
    }
export default FilterCheckbox;