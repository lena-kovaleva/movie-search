import React from 'react';

const SearchResult = () => (
    <div className="movie">
        <img className="film-poster" src="../src/img/films/aquaman.jpg"/>
        <div className="flex">
            <div>
                <h3 className="movie__title">aquaman</h3>
                <p className="movie__genre">action</p>
            </div>
            <div>
                <p className="movie__release-date"> 2018 </p>
            </div>
        </div>
    </div>
)

export default SearchResult;