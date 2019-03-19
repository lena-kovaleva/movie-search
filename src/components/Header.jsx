import React from 'react';
import Logo from './Logo';
import './Header.scss';

const Header = ({ children, extension }) => (
    <header className="header">
        <section className="container flex">
            <Logo>
                movieOnline
            </Logo>
            { extension }
        </section>
        <section className="container">
            { children }
        </section>
    </header>
)

export default Header;