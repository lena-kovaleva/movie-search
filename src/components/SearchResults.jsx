import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ items, onResultSelect}) => (
    <React.Fragment>
        {
            (items || []).map(
                (item) => <SearchResult key={ item.id } {...item} onSelect={ onResultSelect }/>
            )
        }
    </React.Fragment>
)


export default SearchResults;