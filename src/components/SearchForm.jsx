import React from "react";
import Switcher from "./Switcher";

const SearchForm = () => (
    <nav className="search">
        <h3 className="search__title">FIND YOUR MOVIE</h3>
        <input className="search__input" type="header_search" />
        <section className="flex">
            <div className="search__config">
                <Switcher label="SEARCH BY" items={ ["TITLE", "GANRE"] } value='TITLE' />
            </div>
            <a className="search__button" href="">SEARCH</a>
        </section>
    </nav>
)

export default SearchForm;