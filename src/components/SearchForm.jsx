import React from "react";

const SearchForm = () => (
    <nav className="search">
        <h3 className="search__title">FIND YOUR MOVIE</h3>
        <input className="search__input" type="header_search" />
        <section className="flex">
            <div className="search__config">
                <div className="switcher">
                    <span className="switcher__label">SEARCH BY</span>
                    <a className="switcher__button switcher__button--active" href="">TITLE</a>
                    <a className="switcher__button" href="">GENRE</a>
                </div>
            </div>
            <a className="search__button" href="">SEARCH</a>
        </section>
    </nav>
)

export default SearchForm;