import React from 'react';

const MovieDetails = () => (
    <section className="container details flex">
        <div className="details__image">
            <img className="film-poster" src="../src/img/films/aquaman.jpg"/>
        </div>
        <div className="details__description">
            <div className="flex">
                <div>
                    <h3 className="description__title">Aquaman</h3>
                    <p className="description__genre">action</p>
                </div>
                <span className="description__rating">4.5</span>
            </div>
            <span className="description__release-date">2018</span>
            <span className="description__time">190 min</span>
            <p className="description__text">Arthur Curry, half human half from Atlantis, goes on a trip of a lifetime. Not only does this adventure compel him to come to terms with his real identity, but it also forces him to discover whether he is entirely worthy of fulfilling his own destiny: becoming a king.</p>
        </div>
    </section>
)

export default MovieDetails;