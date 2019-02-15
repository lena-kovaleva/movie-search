import React from 'react';
import "./MovieDetails.scss";

const MovieDetails = ({ title, genre, picture, release, rating, time, description}) => (
    <section className="details flex">
        <div className="details__image">
            <img src={ picture }/>
        </div>
        <div className="details__description">
            <div className="flex">
                <div>
                    <h3 className="description__title">{ title }</h3>
                    <p className="description__genre">{ genre }</p>
                </div>
                <span className="description__rating">{ rating }</span>
            </div>
            <span className="description__release-date">{ release }</span>
            <span className="description__time">{ time }</span>
            <p className="description__text">{ description }</p>
        </div>
    </section>
)

export default MovieDetails;