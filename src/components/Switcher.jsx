import React from 'react';

const Switcher = ({ label, items, value, className }) => (
    <div className={ `switcher ${className}` }>
        <span className="switcher__label">{ label }</span>
        {
            items.map(
                item => <a key={item} className={ `switcher__button ${item === value ? 'switcher__button--active' : ''}` } href="">{ item }</a>
            )
        }
    </div>
)

export default Switcher;