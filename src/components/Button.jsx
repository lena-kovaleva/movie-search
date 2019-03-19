import React from 'react';

const Button = ({ label, className, onClick }) => (
    <a onClick={ onClick } className= { className }>
        { label }
    </a>
)

export default Button;