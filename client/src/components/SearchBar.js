import React from "react";

const SearchBar = ({handleChange}) => {
    return (
        <input
            className = 'Side-searchbar'
            type='text'
            onChange={(e) => handleChange(e.target.value)}
            placeholder='search'
        />
    )
}

export default SearchBar;