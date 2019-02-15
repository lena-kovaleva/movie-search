import React from 'react';
import "./Panel.scss"
import Switcher from './Switcher';


const Panel = () => (
    <section className="panel">
        <div className="container flex">
            <div className="result-count">
                <span>7</span> movies found
            </div>
            <Switcher label="Sort by" items={ ["release", "rating"] } value='release' className='switcher--sort' />
        </div>
    </section>
)

export default Panel;