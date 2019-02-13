import React from 'react';
import Logo from './Logo';

const Header = ({children, extension}) => (
    <header>
        <section className="container flex">
            <Logo>
                movie-online
            </Logo>
            {extension}
        </section>
        <section className="container">
            { children }
        </section>
    </header>
)

export default Header;