import React from 'react';
import './SearchResult.scss';

const SearchResult = ({ title, genre, picture, release }) => (
    <div className="movie">
        <img src={ picture }/>
        <div className="flex">
            <div className="movie__info">
                <h3 className="movie__title">{ title }</h3>
                <p className="movie__genre">{ genre }</p>
            </div>
            <div>
                <p className="movie__release-date">{ release }</p>
            </div>
        </div>
    </div>
)

export default SearchResult;