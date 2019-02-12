import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ items }) => (
   <React.Fragment>
        {
            items.map(
                (item, index) => <SearchResult key={index}/>
            )
        }
    </React.Fragment>
)

export default SearchResults;