import React from 'react';
import "./MovieDetails.scss";

const MovieDetails = ({ title, genres, poster_path, release_date, vote_average, runtime, overview }) => {
    const genre = genres.join(", ");
    const release_year=release_date.substr(0,4);
    return (
        <section className="details flex">
            <div className="details__image">
                <img src={ poster_path }/>
            </div>
            <div className="details__description">
                <div className="flex">
                    <div>
                        <h3 className="description__title">{ title }</h3>
                        <p className="description__genre">{ genre }</p>
                    </div>
                    <span className="description__rating">{ vote_average }</span>
                </div>
                <span className="description__release-date">{ release_year }</span>
                <span className="description__time">{ runtime } min</span>
                <p className="description__text">{ overview }</p>
            </div>
        </section>
    )
}

export default MovieDetails;