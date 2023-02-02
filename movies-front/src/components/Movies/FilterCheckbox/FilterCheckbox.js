import React from 'react';
import './FilterCheckbox.css';
function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <input className="filter-checkbox__button" type="checkbox" id="short-films" name="short-films" />
            <label className="filter-checkbox__label" htmlFor='short-films'></label>
            <span className="filter-checkbox__sign">Короткометражки</span>
        </div>
    )
}
export default FilterCheckbox;