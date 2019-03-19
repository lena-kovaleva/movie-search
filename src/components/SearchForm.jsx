import React, {Component} from "react";
import './SearchForm.scss';
import Switcher from "./Switcher";
import Button from "./Button";


class SearchForm extends Component {

    state = {
        value: "",
        searchBy: "TITLE"
    }

    changeValue=(value)=> (
        this.setState({ value })
    )

    changeSearchBy = (searchBy) => {
        this.setState({ searchBy });
    }

    search = () => {
        const onSearch=this.props.onSearch;

        onSearch(this.state.value, this.state.searchBy);
    }

    onInputKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.search();
        }
    }

    render() {
        return(
            <nav className="search">
            <h3 className="search__title">FIND YOUR MOVIE</h3>
            <input className="search__input" type="search"  onChange={ (event)=>this.changeValue(event.target.value) } onKeyUp={ this.onInputKeyUp } />
            <section className="flex">
                <div className="search__config">
                    <Switcher label="SEARCH BY" items={ ["TITLE", "GENRES"] } value="TITLE" onChange={ this.changeSearchBy }/>
                </div>
                <Button label="SEARCH" className="search__button" onClick={ this.search } />
            </section>
        </nav>
        )
    }
}
export default SearchForm;