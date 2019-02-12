import React from 'react';

const Panel = () => (
    <section className="panel">
        <div className="container flex">
            <div className="result-count">
                <span>7</span> movies found
            </div>
            <div className="switcher--sort">
                <span className="switcher__label">Sort by</span>
                <a className="switcher__button switcher__button--active" href="">release</a>
                <a className="switcher__button" href="">rating</a>
            </div>
        </div>
    </section>
)

export default Panel;