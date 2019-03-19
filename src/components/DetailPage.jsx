import React from 'react';
import Footer from './Footer';
import Panel from './Panel';
import SearchResults from './SearchResults';
import MovieDetails from './MovieDetails';
import Button from './Button'
import Header from './Header';


const DetailPage=({onResultSelect, onChangeSortBy, onBack, moviesByGenre, movie})=> {
    const button=<Button onClick={ onBack } label="SEARCH" className="search__button search__button--white"/>;
    let count;
    if (moviesByGenre) count = moviesByGenre.length;
        return(
            <React.Fragment>
                <Header extension={ button }>
                    <MovieDetails { ...movie }/>
                </Header>
                <main>
                    <Panel count={ count } name={"movies"} onChangeSortBy={ onChangeSortBy}/>
                    <section className="container flex">
                        <SearchResults items={ moviesByGenre } onResultSelect={ onResultSelect }/>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        )
}



export default DetailPage;