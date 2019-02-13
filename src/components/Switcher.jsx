import React, {Component} from 'react';

class Switcher extends Component {
    state = {
        value: this.props.value
    }

    setValue = (value) => {
        this.setState({ value });
    }

    render() {
        const { label, items, className } = this.props;
        const { value } = this.state;

        return (
            <div className={ `switcher ${className}` }>
                <span className="switcher__label">{ label }</span>
                {
                    items.map(
                        item => <a key={item} onClick={ () => this.setValue(item) } className={ `switcher__button ${item === value ? 'switcher__button--active' : ''}` }>{ item }</a>
                    )
                }
            </div>
        )
    }
}

export default Switcher;