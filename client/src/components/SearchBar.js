import React from "react";
import "./SearchBar.css"

/**
 * @param {functtion()} handleChange to filter the items dispalyed in the sidebar
 */

const SearchBar = ({ handleChange }) => {
    return (
        <div className="search-bar-container">
            <input
                className="search-bar"
                type='text'
                onChange={(e) => handleChange(e.target.value)}
                placeholder='search'
            />
        </div>
    )
}


export default SearchBar;