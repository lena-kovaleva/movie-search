import React from 'react';
import "./Panel.scss"
import Switcher from './Switcher';

const getMovieCountText = (count, name) => {
    if (count === 0) {
        return `no ${ name } found`;
    }

    return count
        ? `${ count } ${ name } found`
        : null;
}

const Panel = ({ count, name, onChangeSortBy }) => (
    <section className="panel">
        <div className="container flex">
            <div>{ getMovieCountText(count, name) }</div>
            <Switcher label="Sort by" items={ ["release", "rating"] } value='release' className='switcher--sort' onChange={ onChangeSortBy }/>
        </div>
    </section>
)

export default Panel;