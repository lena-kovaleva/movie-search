import React from 'react';
import './SearchResult.scss';

const SearchResult = ({ title, genres, poster_path, release_date, vote_average, runtime, overview, onSelect }) => {
    let release_year = release_date.substr(0, 4);
    let genre = genres.join(", ");
    return (
        <div className="movie" onClick={ () => onSelect({ title, genres, poster_path, release_date, vote_average, runtime, overview }) } >
            <img src={ poster_path }/>
            <div className="flex">
                <div className="movie__info">
                    <h3 className="movie__title">{ title }</h3>
                    <p className="movie__genre">{ genre }</p>
                </div>
                <div>
                    <p className="movie__release-date">{ release_year }</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;