import React, {Component} from 'react';
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';


function sortByRelease(item1, item2) {
    if (item1.release_date>item2.release_date) return -1;
    if (item1.release_date<item2.release_date) return 1
    return 0;
}

function sortByRating(item1, item2) {
    if (item1.vote_average>item2.vote_average) return -1;
    if (item1.vote_average<item2.vote_average) return 1
    return 0;
}

class App extends Component {
    state = {
        movies: null,
        movie: null,
        value: null,
        moviesByGenre: null,
        sortBy: "release",
        loading: false
    }


    setValue=(value, searchBy)=> {
        this.setState({ loading: true, movies: null, moviesByGanre: null, value: value, count: null });
        console.log(this.state.loading)
        fetch(`http://react-cdp-api.herokuapp.com/movies?search=${ value.toLowerCase() }&searchBy=${ searchBy.toLowerCase() }`)
            .then(
                response => response.json()
            ).then(
                data => {
                    const { sortBy }=this.state;
                    const sortFunction = (sortBy=="release")
                        ? sortByRelease
                        : sortByRating;
                    this.setState({
                        movies: data.data.sort(sortFunction),
                        loading: false,
                        count: data.data.length
                    });
                }
            );
    }

    setPage=( movie )=> {
        this.setState({ movie })
        if (movie) this.setMovieByGanre(movie);
    }
    setMovieByGanre(movie) {
        console.log(movie)
        fetch(`http://react-cdp-api.herokuapp.com/movies?search=${ movie.genres[0]}&searchBy=genres`)
        .then(
            response => response.json()
        ).then(
            data => {
                const { sortBy }=this.state;
                const sortFunction = (sortBy=="release")
                        ? sortByRelease
                        : sortByRating;
                this.setState({ moviesByGenre: data.data.sort(sortFunction).filter(function(item) {
                    return (item.title!=movie.title) })})
                this.setState({ loading: false });
            }
        )
    }

    changeSortBy=(sortBy)=>{
        this.setState({ sortBy });
        console.log(sortBy);
        const { movies } = this.state;
        const {moviesByGenre} =this.state;

        if (movies) {
            let sortFunction;
            if (sortBy=='release') {
                sortFunction = sortByRelease;
            } else if (sortBy=='rating') {
                sortFunction = sortByRating;
            }
            movies.sort(sortFunction);
            this.setState({movies});

            if (moviesByGenre) {
                moviesByGenre.sort(sortFunction);
                this.setState({movies});
            }
        }
    }


    render() {
        const { movie, movies, count, moviesByGenre, loading} = this.state;

        if (movie) {
            return (
                <DetailPage onResultSelect={ (movie)=> this.setPage(movie) } onChangeSortBy={ (sortBy)=> this.changeSortBy(sortBy)} movie={ movie } onBack={()=>this.setPage(null)} moviesByGenre={moviesByGenre}/>
            )
        }
        else {
            return (
                <SearchPage onResultSelect={ (movie)=> this.setPage(movie)} onChangeSortBy={ (sortBy)=> this.changeSortBy(sortBy)} onChangeSearchBy={ (searchBy)=> this.changeSearchBy(searchBy)} setValue={ (value, searchBy)=> this.setValue(value, searchBy)} movies = {movies} count= {count}  loading={loading}/>
            )
        }
    }
}

export default App;