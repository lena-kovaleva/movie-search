import React from 'react';
import './SearchPage.scss';
import Footer from './Footer';
import Panel from './Panel';
import SearchResults from './SearchResults'
import SearchForm from './SearchForm';
import Header from './Header';
import Loader from './Loader';


const SearchPage = ({onResultSelect, setValue, onChangeSortBy, count, movies, loading}) =>{
    return (
        <React.Fragment>
            <Header>
                <SearchForm onSearch={ setValue } />
            </Header>
            <main>
                <Panel count={ count } name={"movies"} onChangeSortBy={ onChangeSortBy }/>
                <section className="container flex movies">
                    <Loader loading={loading}/>
                    <SearchResults items={ movies } onResultSelect={ onResultSelect } />
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default SearchPage;