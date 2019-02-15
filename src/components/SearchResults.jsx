import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ items }) => (
   <React.Fragment>
        {
            items.map(
                (item) => <SearchResult key={ item.id } title={ item.title } genre={item.genre} release={item.release} picture={item.picture}/>
            )
        }
    </React.Fragment>
)

export default SearchResults;